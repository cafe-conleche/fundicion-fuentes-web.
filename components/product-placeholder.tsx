import { MediaSlot } from "@/components/media-slot";

/** @deprecated Usar MediaSlot directamente. */
export function ProductPlaceholder({ title }: { title: string }) {
  return <MediaSlot variant="product" label={title} />;
}
