import {JsonHeader} from "@tsed/schema";
import {PlatformContext} from "../domain/PlatformContext";
import {HeaderValue} from "../services/PlatformResponse";

function mergeHeaders(specHeaders: Record<string, JsonHeader & {example: string}>, headers: Record<string, HeaderValue>) {
  return Object.entries(specHeaders).reduce((headers, [key, item]) => {
    key = key.toLowerCase();
    return {
      ...headers,
      [key]: headers[key] === undefined ? String(item.example) : headers[key]
    };
  }, headers);
}

/**
 * @ignore
 */
export function setResponseHeaders(ctx: PlatformContext) {
  const {response, endpoint} = ctx;
  const {operation} = endpoint;

  if (response.isDone()) {
    return;
  }

  if (!response.hasStatus()) {
    // apply status only if the isn't already modified
    response.status(operation.getStatus());
  }

  const headers = operation.getHeadersOf(response.statusCode);
  response.setHeaders(mergeHeaders(headers, response.getHeaders()));

  if (endpoint.redirect) {
    response.redirect(endpoint.redirect.status || 302, endpoint.redirect.url);
  }

  if (endpoint.location) {
    response.location(endpoint.location);
  }
}
