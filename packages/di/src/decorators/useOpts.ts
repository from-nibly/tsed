import {DecoratorTypes, getDecoratorType, Store, UnsupportedDecoratorType} from "@tsed/core";
import {DI_PARAM_OPTIONS, INJECTABLE_PROP} from "../constants";

/**
 * Add options to invoke the Service.
 *
 * ```typescript
 * @Injectable()
 * class MyConfigurableService {
 *   source: string;
 *   constructor(@Opts options: any = {}) {
 *      console.log("Hello ", options.source); // log: Hello Service1 then Hello Service2
 *
 *      this.source = source;
 *   }
 * }
 *
 * @Injectable()
 * class MyService1 {
 *   constructor(@UseOpts({source: 'Service1'}) service: MyConfigurableService) {
 *     console.log(service.source) // log: Service1
 *   }
 * }
 *
 * @Injectable()
 * class MyService2 {
 *   constructor(@UseOpts({source: 'Service2'}) service: MyConfigurableService) {
 *     console.log(service.source) // log: Service2
 *   }
 * }
 * ```
 *
 * ::: warning
 * Use @@Opts@@ decorator on a constructor parameter change the Scope of the service to `ProviderScope.INSTANCE`.
 * :::
 *
 * @returns {Function}
 * @decorator
 * @param options
 */
export function UseOpts(options: {[key: string]: any}): Function {
  return (target: Object, propertyKey: string | symbol, index?: number): any => {
    const bindingType = getDecoratorType([target, propertyKey, index], true);

    switch (bindingType) {
      case DecoratorTypes.PARAM_CTOR:
        Store.from(target).merge(`${DI_PARAM_OPTIONS}:${index}`, options);
        break;

      case DecoratorTypes.PROP:
        Store.from(target).merge(INJECTABLE_PROP, {
          [propertyKey as string]: {
            options
          }
        });
        break;

      default:
        throw new UnsupportedDecoratorType(UseOpts, [target, propertyKey, index]);
    }
  };
}
