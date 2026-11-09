// The words rise as the block scrolls into view, driven by a CSS scroll timeline (see `.wordmark-word`
// in index.css). The browser runs it on the compositor alongside native scrolling, so the words track
// the scroll exactly, with no main-thread lag on desktop or mobile. Browsers without scroll timelines
// show the words in their final position.
export function FooterWordmark() {
  return (
    <div aria-hidden className="wordmark @container mx-3 pb-4 pt-32 sm:mx-4 sm:pb-6 sm:pt-48">
      <p className="hero-type select-none whitespace-nowrap text-[calc(100cqw/9.46)] leading-none">
        <span className="inline-block overflow-hidden align-bottom leading-[1]">
          <span className="wordmark-word inline-block [animation-range:entry_20%_entry_80%]">Suraj</span>
        </span>{" "}
        <span className="inline-block overflow-hidden align-bottom leading-[1]">
          <span className="wordmark-word inline-block [animation-range:entry_35%_entry_95%]">Patel</span>
        </span>
      </p>
    </div>
  );
}
