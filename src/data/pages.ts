export interface PageSection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export interface StaticPage {
  slug: string
  eyebrow: string
  title: string
  description: string
  sections: PageSection[]
}

export const staticPages: StaticPage[] = [
  {
    slug: 'start-here',
    eyebrow: 'A reader’s guide',
    title: 'Pick a world. Start there.',
    description: 'Find a first NCU story world, see what is published, and continue reading on Pylothouse.',
    sections: [
      {
        heading: 'New to NCU?',
        paragraphs: ['The NCU is a growing slate of distinct comic universes. You do not need a shared-universe reading order to begin; choose the premise that interests you.'],
        bullets: ['Browse all seven universes.', 'Open a universe profile for its genre and spoiler-light introduction.', 'Use the Pylothouse link to discover available comics.'],
      },
      {
        heading: 'Want the shortest route?',
        paragraphs: ['Start with M.O.D for cyberpunk drama, Lord’s Lounge for celestial comedy, or The Unliving Sage for dark fantasy. These are starting suggestions based on genre, not a canon order.'],
      },
      {
        heading: 'Looking for character profiles?',
        paragraphs: ['The character archive is still in progress. Universe pages provide the currently available introductions without inventing unpublished character details.'],
      },
      {
        heading: 'Need a spoiler-light introduction?',
        paragraphs: ['Each universe profile focuses on its high-level premise and published themes. Chapter-level plot details belong with the official releases on Pylothouse.'],
      },
      {
        heading: 'Want to follow new releases?',
        paragraphs: ['The NCU News page will carry confirmed announcements. Email updates can be requested once the mailing-list service is connected.'],
      },
    ],
  },
  {
    slug: 'about',
    eyebrow: 'About the universe',
    title: 'Original worlds, connected.',
    description: 'NCU is the home of Nartstudio’s original comic universes: distinct stories with their own tone, setting and mythology.',
    sections: [
      {
        heading: 'A growing slate of story worlds',
        paragraphs: ['From celestial comedy to dark fantasy, NCU brings together original comic franchises developed under the Nartstudio banner. Each world has its own identity and room to grow.'],
      },
      {
        heading: 'Made for curious readers',
        paragraphs: ['This site is the guide to the worlds: introductions, reading guidance and official updates. Comics are published and read on Pylothouse, not embedded here.'],
      },
      {
        heading: 'Part of Nartstudio',
        paragraphs: ['NCU is one part of the wider Nartstudio creative family, alongside Oubyt and Pylothouse.'],
      },
      {
        heading: 'Seven listed story worlds',
        paragraphs: ['The current directory includes Lord’s Lounge, M.O.D, NATOVERSE, The Unliving Sage, False Magic, Holo Host and Royal Target. Each has a separate genre and introduction.'],
      },
      {
        heading: 'An evolving reference',
        paragraphs: ['The guide will expand as approved universe notes, release details and character profiles become available. Unpublished canon and unconfirmed schedules are intentionally left out.'],
      },
    ],
  },
  {
    slug: 'contact',
    eyebrow: 'Get in touch',
    title: 'Contact the Nartstudio team.',
    description: 'Route reader questions, press requests, licensing enquiries and partnership ideas to the studio.',
    sections: [
      {
        heading: 'Reader support',
        paragraphs: ['For account, access or reading questions about published comics, contact Pylothouse through its own support channels. NCU does not host comic chapters or reader accounts.'],
      },
      {
        heading: 'Studio enquiries',
        paragraphs: ['For press, licensing, partnerships or general studio questions, use the Nartstudio contact page. Please do not send confidential project material before an NDA is agreed.'],
      },
      {
        heading: 'Choose the right destination',
        paragraphs: ['Press and interview requests can start with the studio team. Rights, adaptation and usage questions belong on the licensing page. Comic account or reading problems should go to Pylothouse.'],
      },
      {
        heading: 'What to include',
        paragraphs: ['For a useful reply, identify the universe or release you are asking about, describe the request briefly and provide a contact method. Do not attach private or confidential material.'],
      },
    ],
  },
  {
    slug: 'press',
    eyebrow: 'Press information',
    title: 'NCU at a glance.',
    description: 'A concise introduction to the Nartstudio Comic Universe for media and editorial use.',
    sections: [
      {
        heading: 'About NCU',
        paragraphs: ['NCU is the home of Nartstudio’s original comic universes: a growing slate of character-led stories, each with its own tone, setting and mythology.'],
        bullets: ['Seven story worlds are currently listed.', 'The universe guide is maintained by Nartstudio.', 'Available comics are discovered and read on Pylothouse.'],
      },
      {
        heading: 'Assets and interviews',
        paragraphs: ['No downloadable press kit or interview schedule is published yet. Contact Nartstudio for approved logos, artwork, interview requests or usage permissions.'],
      },
      {
        heading: 'Using NCU facts',
        paragraphs: ['Use the current universe names and high-level descriptions shown in this guide. Treat release dates, ratings, crossovers and character details as unconfirmed unless they appear in an official announcement.'],
      },
      {
        heading: 'Press contact',
        paragraphs: ['Route editorial, interview and approved-asset requests through Nartstudio’s contact page. No press-kit files are offered for download yet.'],
      },
    ],
  },
  {
    slug: 'licensing',
    eyebrow: 'Rights and partnerships',
    title: 'Build with NCU.',
    description: 'Contact Nartstudio about licensing, adaptation and partnership enquiries related to NCU story worlds.',
    sections: [
      {
        heading: 'Start a conversation',
        paragraphs: ['Tell the studio which world or property you are asking about, the intended format, your role and a useful way to reach you. No licensing availability or rights grant is implied by this page.'],
      },
      {
        heading: 'Before you write',
        paragraphs: ['Do not submit confidential creative material or assume that unsolicited concepts can be reviewed. Nartstudio will confirm the appropriate process after receiving your enquiry.'],
      },
      {
        heading: 'Helpful enquiry details',
        paragraphs: ['Include the property or universe, intended medium, territories, proposed audience, timeline and your organization or professional role. These details help route the request; they do not imply availability.'],
      },
      {
        heading: 'Rights and permissions',
        paragraphs: ['Do not reproduce or adapt NCU characters, story worlds, comics or artwork without written permission from the relevant rights-holder.'],
      },
    ],
  },
  {
    slug: 'faq',
    eyebrow: 'Frequently asked questions',
    title: 'A few useful answers.',
    description: 'Answers about NCU worlds, comics, characters and reading order.',
    sections: [
      {
        heading: 'Where do I read NCU comics?',
        paragraphs: ['NCU comics are published and read on Pylothouse. This website introduces the universes and links out to the comic library.'],
      },
      {
        heading: 'Do I need to read the universes in a particular order?',
        paragraphs: ['No cross-universe chronology is published here. Start with any world that interests you and follow its available releases on Pylothouse.'],
      },
      {
        heading: 'Where are the character profiles?',
        paragraphs: ['The character archive is in progress. Profiles will be added when approved content is ready.'],
      },
      {
        heading: 'Can I use NCU artwork or characters?',
        paragraphs: ['Please request permission before using or reposting NCU artwork or story material. See the community and copyright guidance for more information.'],
      },
      {
        heading: 'Are ratings and content notes available?',
        paragraphs: ['This guide does not yet have approved chapter-level ratings or content notes. Check the relevant Pylothouse release page before reading.'],
      },
      {
        heading: 'Does NCU have an official Discord?',
        paragraphs: ['No official Discord or community forum is linked from this site at this time. Use only community spaces linked by Nartstudio.'],
      },
      {
        heading: 'Can I get email updates?',
        paragraphs: ['The newsletter form reports when signup is unavailable. Email updates will only be delivered after Nartstudio configures and tests the mailing-list service.'],
      },
    ],
  },
]

export function getStaticPage(slug: string): StaticPage | undefined {
  return staticPages.find((page) => page.slug === slug)
}
