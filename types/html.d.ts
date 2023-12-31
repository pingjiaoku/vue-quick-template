import { Icon } from "@iconify/vue";
import type { AttributifyAttributes } from "@unocss/preset-attributify";

declare module "@vue/runtime-dom" {
  interface HTMLAttributes extends AttributifyAttributes {}
}