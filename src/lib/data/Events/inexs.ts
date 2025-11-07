export interface EventItem {
  id: string
  title: string
  image: string
  describe: string
}

const events: EventItem[] = [
  {
    id: "1",
    title: "نمایشگاه بزرگ علم و فناوری بهشر",
    image: "/images/cert-1.jpg",
    describe: "توضیحاتی مختصر درباره‌ی این افتخار و دستاورد که برای نمایشگاه بزرگ علمی پارک علم و فناوری بوشهر ارائه شده است.",

  },
  {
    id: "2",
    title: "نمایشگاه بزرگ علم و فناوری بهشر",
    image: "/images/cert-2.jpg",
    describe: "توضیحاتی مختصر درباره‌ی این افتخار و دستاورد که برای نمایشگاه بزرگ علمی پارک علم و فناوری بوشهر ارائه شده است.",

  },
  {
    id: "3",
    title: "نمایشگاه بزرگ علم و فناوری بهشر",
    image: "/images/cert-3.jpg",
    describe: "توضیحاتی مختصر درباره‌ی این افتخار و دستاورد که برای نمایشگاه بزرگ علمی پارک علم و فناوری بوشهر ارائه شده است.",

  },
  {
    id: "4",
    title: "نمایشگاه بزرگ علم و فناوری بهشر",
    image: "/images/cert-4.jpg",
    describe: "توضیحاتی مختصر درباره‌ی این افتخار و دستاورد که برای نمایشگاه بزرگ علمی پارک علم و فناوری بوشهر ارائه شده است.",
  },
]

export const getEvents = (): EventItem[] => {
  return events
}
