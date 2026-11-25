export function PhoneMockup() {
  return (
    <div className="relative mx-auto flex w-full max-w-[360px] items-center justify-center py-4 sm:max-w-[450px] lg:py-2">
      {/* Secondary Tilted Companion Phone (Ad-Free Video Feeds Screenshot) */}
      <div
        aria-hidden="true"
        className="absolute top-8 right-2 z-0 w-[188px] origin-bottom-left rotate-[7deg] rounded-[36px] bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400 p-[2.5px] shadow-[0_24px_50px_-14px_rgba(15,23,42,0.28)] ring-1 ring-slate-900/10 sm:top-10 sm:right-2 sm:w-[228px] sm:rounded-[40px] dark:from-white/25 dark:via-slate-500/20 dark:to-white/10 dark:ring-white/10 dark:shadow-[0_28px_60px_-14px_rgba(2,6,23,0.85)]"
      >
        <div className="rounded-[33.5px] bg-[#090D16] p-[5.5px] ring-1 ring-inset ring-white/15 sm:rounded-[37.5px]">
          <div className="relative aspect-[9/20] overflow-hidden rounded-[28px] bg-slate-100 sm:rounded-[31px] dark:bg-slate-900">
            <img
              src="/assets/aistudio/Screenshot_20261125-093815_4d5f2d65.png"
              alt=""
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-top"
            />
            {/* Subtle Vignette for Layered Depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-950/25" />
          </div>
        </div>
      </div>

      {/* Primary Foreground Flagship Android Mockup (Home / Link Downloader Screenshot) */}
      <div className="relative z-10 -translate-x-7 sm:-translate-x-11">
        {/* Hardware Side Keys (Right Edge: Volume + Power) */}
        <div
          aria-hidden="true"
          className="absolute top-24 -right-[3px] h-12 w-[3px] rounded-r-sm bg-slate-400/90 dark:bg-slate-600"
        />
        <div
          aria-hidden="true"
          className="absolute top-40 -right-[3px] h-7 w-[3px] rounded-r-sm bg-slate-400/90 dark:bg-slate-600"
        />
        {/* Left Edge Accent */}
        <div
          aria-hidden="true"
          className="absolute top-28 -left-[2.5px] h-8 w-[2.5px] rounded-l-sm bg-slate-400/80 dark:bg-slate-700"
        />

        {/* Sculpted Titanium Metallic Frame */}
        <div className="w-[228px] rounded-[40px] bg-gradient-to-br from-slate-200 via-white to-slate-400 p-[3px] shadow-[0_28px_65px_-16px_rgba(15,23,42,0.3)] ring-1 ring-slate-900/10 sm:w-[264px] sm:rounded-[44px] dark:from-slate-500/75 dark:via-slate-700/70 dark:to-slate-900 dark:ring-white/10 dark:shadow-[0_32px_75px_-16px_rgba(2,6,23,0.9)]">
          {/* Recessed OLED Glass Bezel */}
          <div className="rounded-[37px] bg-[#0B101B] p-[6px] ring-1 ring-inset ring-white/20 sm:rounded-[41px] sm:p-[7px]">
            {/* Edge-to-Edge Real App Screenshot Display */}
            <div className="relative aspect-[9/20] overflow-hidden rounded-[31px] bg-slate-100 sm:rounded-[34px] dark:bg-slate-900">
              <img
                src="/assets/aistudio/Screenshot_20261125-093746_81ca962f.png"
                alt="OmniDownloader Android app home screen with link paste card and supported platforms"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />

              {/* Subtle Top Punch-Hole Camera Lens */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1.5 left-1/2 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-[#090D16] ring-1 ring-black/20"
              >
                <div className="h-1 w-1 rounded-full bg-slate-700" />
              </div>

              {/* Subtle Glass Reflection Sheen */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[31px] bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.12] sm:rounded-[34px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
