import type { PiniaPluginContext } from "pinia";
import { cloneDeep } from "@/utils";

/**
 * setup语法的重置状态插件
 * @param context
 * @description 请将用setup语法的状态id写入到setupSyntaxIds
 */
export const resetSetupStore = (context: PiniaPluginContext) => {
  const { $state } = context.store;

  const defaultStore = cloneDeep($state);

  context.store.$reset = () => {
    context.store.$patch(defaultStore);
  };
};
