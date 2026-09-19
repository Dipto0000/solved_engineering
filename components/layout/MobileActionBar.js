import { MessageCircle, Phone } from "lucide-react";

import { site } from "@/lib/site";

/**
 * Fixed quick-action bar shown on small screens only.
 * Offset with `pb-20 md:pb-0` on the page content so it never covers the footer.
 */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a
          href={site.contact.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand text-sm font-semibold text-white transition-colors active:scale-[0.98]"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call
        </a>
        <a
          href={site.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#25D366] text-sm font-semibold text-white transition-colors active:scale-[0.98]"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
