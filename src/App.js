import TranscriptEditor from "@bbc/react-transcript-editor";
import { useCallback } from "react";

const json = {
  jobName: "TEST__GenerateTranscription",
  accountId: "449931334662",
  results: {
    transcripts: [
      {
        transcript:
          "Hey man. Um so I have this white box here in this login thing and I've just done all the blind heights to make it match up with sigma and like Um just sort of read blinded and made sure that like, you know, that's 30 in there so that like um You know, I'm like 30 here, everything. Um like that, the yellow box there at the top, that's the correct spacing in it for everything and that it works and that there isn't a jitter between. So basically there's a bunch of design stuff, right? Um So like how do you then, it sounds like you guys have like design snapshots? That storybook that like design snapshots at because I just wrote a test like to clarify that we send it to the author endpoint and it redirects to this page, right? Like so that's good. I know it's going to do that, but I was wondering if you have any like design snapshots you guys run"
      }
    ],
    items: [
      {
        start_time: "0.54",
        end_time: "0.74",
        alternatives: [
          {
            confidence: "0.8793",
            content: "Hey"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "0.74",
        end_time: "1.01",
        alternatives: [
          {
            confidence: "1.0",
            content: "man"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: "."
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "1.02",
        end_time: "2.06",
        alternatives: [
          {
            confidence: "0.9984",
            content: "Um"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "2.64",
        end_time: "2.75",
        alternatives: [
          {
            confidence: "0.619",
            content: "so"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "2.75",
        end_time: "2.78",
        alternatives: [
          {
            confidence: "0.9294",
            content: "I"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "2.78",
        end_time: "2.87",
        alternatives: [
          {
            confidence: "0.9788",
            content: "have"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "2.87",
        end_time: "3.06",
        alternatives: [
          {
            confidence: "1.0",
            content: "this"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "3.06",
        end_time: "3.43",
        alternatives: [
          {
            confidence: "0.998",
            content: "white"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "3.44",
        end_time: "3.89",
        alternatives: [
          {
            confidence: "1.0",
            content: "box"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "3.89",
        end_time: "4.42",
        alternatives: [
          {
            confidence: "0.9985",
            content: "here"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "4.43",
        end_time: "4.64",
        alternatives: [
          {
            confidence: "1.0",
            content: "in"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "4.64",
        end_time: "5.06",
        alternatives: [
          {
            confidence: "1.0",
            content: "this"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "5.07",
        end_time: "5.52",
        alternatives: [
          {
            confidence: "0.9941",
            content: "login"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "5.52",
        end_time: "5.77",
        alternatives: [
          {
            confidence: "1.0",
            content: "thing"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "5.77",
        end_time: "5.88",
        alternatives: [
          {
            confidence: "0.9891",
            content: "and"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "5.88",
        end_time: "5.98",
        alternatives: [
          {
            confidence: "0.9695",
            content: "I've"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "5.98",
        end_time: "6.22",
        alternatives: [
          {
            confidence: "1.0",
            content: "just"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "6.22",
        end_time: "6.39",
        alternatives: [
          {
            confidence: "1.0",
            content: "done"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "6.39",
        end_time: "6.51",
        alternatives: [
          {
            confidence: "0.9946",
            content: "all"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "6.51",
        end_time: "6.65",
        alternatives: [
          {
            confidence: "0.9786",
            content: "the"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "6.66",
        end_time: "7.15",
        alternatives: [
          {
            confidence: "0.9951",
            content: "blind"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "7.15",
        end_time: "7.43",
        alternatives: [
          {
            confidence: "0.9926",
            content: "heights"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "7.43",
        end_time: "7.52",
        alternatives: [
          {
            confidence: "0.9961",
            content: "to"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "7.52",
        end_time: "7.71",
        alternatives: [
          {
            confidence: "1.0",
            content: "make"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "7.71",
        end_time: "7.8",
        alternatives: [
          {
            confidence: "0.999",
            content: "it"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "7.8",
        end_time: "8.08",
        alternatives: [
          {
            confidence: "0.9981",
            content: "match"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "8.08",
        end_time: "8.46",
        alternatives: [
          {
            confidence: "0.9981",
            content: "up"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "9.14",
        end_time: "9.29",
        alternatives: [
          {
            confidence: "0.9992",
            content: "with"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "9.29",
        end_time: "10.11",
        alternatives: [
          {
            confidence: "0.7603",
            content: "sigma"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "10.12",
        end_time: "10.29",
        alternatives: [
          {
            confidence: "0.9316",
            content: "and"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "10.29",
        end_time: "10.85",
        alternatives: [
          {
            confidence: "0.9998",
            content: "like"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "12.04",
        end_time: "12.64",
        alternatives: [
          {
            confidence: "0.9976",
            content: "Um"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "12.65",
        end_time: "13.12",
        alternatives: [
          {
            confidence: "1.0",
            content: "just"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "13.12",
        end_time: "13.27",
        alternatives: [
          {
            confidence: "0.9999",
            content: "sort"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "13.27",
        end_time: "13.4",
        alternatives: [
          {
            confidence: "1.0",
            content: "of"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "13.4",
        end_time: "13.62",
        alternatives: [
          {
            confidence: "0.5354",
            content: "read"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "13.62",
        end_time: "14.06",
        alternatives: [
          {
            confidence: "0.8179",
            content: "blinded"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "14.06",
        end_time: "14.18",
        alternatives: [
          {
            confidence: "1.0",
            content: "and"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "14.18",
        end_time: "14.38",
        alternatives: [
          {
            confidence: "0.9981",
            content: "made"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "14.38",
        end_time: "14.68",
        alternatives: [
          {
            confidence: "1.0",
            content: "sure"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "14.68",
        end_time: "14.9",
        alternatives: [
          {
            confidence: "1.0",
            content: "that"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "14.9",
        end_time: "15.18",
        alternatives: [
          {
            confidence: "1.0",
            content: "like"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: ","
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "15.18",
        end_time: "15.26",
        alternatives: [
          {
            confidence: "1.0",
            content: "you"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "15.26",
        end_time: "15.4",
        alternatives: [
          {
            confidence: "0.9973",
            content: "know"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: ","
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "15.4",
        end_time: "15.71",
        alternatives: [
          {
            confidence: "0.9873",
            content: "that's"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "15.71",
        end_time: "16.26",
        alternatives: [
          {
            confidence: "1.0",
            content: "30"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "16.26",
        end_time: "16.4",
        alternatives: [
          {
            confidence: "1.0",
            content: "in"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "16.4",
        end_time: "16.75",
        alternatives: [
          {
            confidence: "0.9836",
            content: "there"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "16.75",
        end_time: "16.93",
        alternatives: [
          {
            confidence: "0.9988",
            content: "so"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "16.93",
        end_time: "17.17",
        alternatives: [
          {
            confidence: "0.9985",
            content: "that"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "17.17",
        end_time: "17.65",
        alternatives: [
          {
            confidence: "1.0",
            content: "like"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "18.44",
        end_time: "19.16",
        alternatives: [
          {
            confidence: "0.9897",
            content: "um"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "20.34",
        end_time: "20.45",
        alternatives: [
          {
            confidence: "1.0",
            content: "You"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "20.45",
        end_time: "20.61",
        alternatives: [
          {
            confidence: "1.0",
            content: "know"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: ","
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "20.61",
        end_time: "20.78",
        alternatives: [
          {
            confidence: "0.9971",
            content: "I'm"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "20.78",
        end_time: "21.01",
        alternatives: [
          {
            confidence: "1.0",
            content: "like"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "21.02",
        end_time: "21.34",
        alternatives: [
          {
            confidence: "1.0",
            content: "30"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "21.34",
        end_time: "21.86",
        alternatives: [
          {
            confidence: "0.9973",
            content: "here"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: ","
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "22.34",
        end_time: "23.2",
        alternatives: [
          {
            confidence: "0.9965",
            content: "everything"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: "."
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "23.21",
        end_time: "24.26",
        alternatives: [
          {
            confidence: "0.9977",
            content: "Um"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "25.84",
        end_time: "26.27",
        alternatives: [
          {
            confidence: "1.0",
            content: "like"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "26.28",
        end_time: "26.84",
        alternatives: [
          {
            confidence: "1.0",
            content: "that"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: ","
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "26.85",
        end_time: "27.2",
        alternatives: [
          {
            confidence: "1.0",
            content: "the"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "27.21",
        end_time: "27.66",
        alternatives: [
          {
            confidence: "1.0",
            content: "yellow"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "27.66",
        end_time: "28.14",
        alternatives: [
          {
            confidence: "1.0",
            content: "box"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "28.14",
        end_time: "28.5",
        alternatives: [
          {
            confidence: "0.9344",
            content: "there"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "28.5",
        end_time: "28.62",
        alternatives: [
          {
            confidence: "1.0",
            content: "at"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "28.62",
        end_time: "28.73",
        alternatives: [
          {
            confidence: "1.0",
            content: "the"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "28.73",
        end_time: "29.35",
        alternatives: [
          {
            confidence: "1.0",
            content: "top"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: ","
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "30.1",
        end_time: "30.25",
        alternatives: [
          {
            confidence: "0.2651",
            content: "that's"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "30.25",
        end_time: "30.36",
        alternatives: [
          {
            confidence: "0.9998",
            content: "the"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "30.36",
        end_time: "31.32",
        alternatives: [
          {
            confidence: "1.0",
            content: "correct"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "31.33",
        end_time: "32.22",
        alternatives: [
          {
            confidence: "1.0",
            content: "spacing"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "32.22",
        end_time: "32.33",
        alternatives: [
          {
            confidence: "0.9341",
            content: "in"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "32.33",
        end_time: "32.49",
        alternatives: [
          {
            confidence: "0.9385",
            content: "it"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "32.49",
        end_time: "32.64",
        alternatives: [
          {
            confidence: "1.0",
            content: "for"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "32.64",
        end_time: "33.24",
        alternatives: [
          {
            confidence: "0.9985",
            content: "everything"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "33.24",
        end_time: "33.36",
        alternatives: [
          {
            confidence: "1.0",
            content: "and"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "33.36",
        end_time: "33.49",
        alternatives: [
          {
            confidence: "0.9983",
            content: "that"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "33.49",
        end_time: "33.6",
        alternatives: [
          {
            confidence: "1.0",
            content: "it"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "33.6",
        end_time: "33.98",
        alternatives: [
          {
            confidence: "1.0",
            content: "works"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "33.98",
        end_time: "34.08",
        alternatives: [
          {
            confidence: "1.0",
            content: "and"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "34.08",
        end_time: "34.22",
        alternatives: [
          {
            confidence: "0.9992",
            content: "that"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "34.22",
        end_time: "34.34",
        alternatives: [
          {
            confidence: "0.7986",
            content: "there"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "34.34",
        end_time: "34.61",
        alternatives: [
          {
            confidence: "0.6735",
            content: "isn't"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "34.61",
        end_time: "34.67",
        alternatives: [
          {
            confidence: "0.6123",
            content: "a"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "34.67",
        end_time: "35.3",
        alternatives: [
          {
            confidence: "0.9619",
            content: "jitter"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "35.31",
        end_time: "35.89",
        alternatives: [
          {
            confidence: "1.0",
            content: "between"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: "."
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "35.89",
        end_time: "36.02",
        alternatives: [
          {
            confidence: "0.9982",
            content: "So"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "36.02",
        end_time: "36.36",
        alternatives: [
          {
            confidence: "1.0",
            content: "basically"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "36.36",
        end_time: "36.5",
        alternatives: [
          {
            confidence: "0.9789",
            content: "there's"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "36.5",
        end_time: "36.55",
        alternatives: [
          {
            confidence: "1.0",
            content: "a"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "36.55",
        end_time: "36.78",
        alternatives: [
          {
            confidence: "1.0",
            content: "bunch"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "36.78",
        end_time: "36.86",
        alternatives: [
          {
            confidence: "1.0",
            content: "of"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "36.86",
        end_time: "37.28",
        alternatives: [
          {
            confidence: "0.9749",
            content: "design"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "37.28",
        end_time: "37.63",
        alternatives: [
          {
            confidence: "1.0",
            content: "stuff"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: ","
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "37.63",
        end_time: "37.96",
        alternatives: [
          {
            confidence: "0.9674",
            content: "right"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: "?"
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "38.64",
        end_time: "39.45",
        alternatives: [
          {
            confidence: "0.9897",
            content: "Um"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "40.54",
        end_time: "41.13",
        alternatives: [
          {
            confidence: "1.0",
            content: "So"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "41.13",
        end_time: "41.34",
        alternatives: [
          {
            confidence: "1.0",
            content: "like"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "41.34",
        end_time: "41.6",
        alternatives: [
          {
            confidence: "1.0",
            content: "how"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "41.6",
        end_time: "41.76",
        alternatives: [
          {
            confidence: "1.0",
            content: "do"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "41.76",
        end_time: "42.36",
        alternatives: [
          {
            confidence: "0.9995",
            content: "you"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "42.84",
        end_time: "43.5",
        alternatives: [
          {
            confidence: "1.0",
            content: "then"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: ","
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "43.51",
        end_time: "43.74",
        alternatives: [
          {
            confidence: "1.0",
            content: "it"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "43.74",
        end_time: "44.03",
        alternatives: [
          {
            confidence: "1.0",
            content: "sounds"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "44.03",
        end_time: "44.17",
        alternatives: [
          {
            confidence: "1.0",
            content: "like"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "44.17",
        end_time: "44.27",
        alternatives: [
          {
            confidence: "1.0",
            content: "you"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "44.27",
        end_time: "44.41",
        alternatives: [
          {
            confidence: "1.0",
            content: "guys"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "44.41",
        end_time: "44.61",
        alternatives: [
          {
            confidence: "0.9992",
            content: "have"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "44.61",
        end_time: "44.78",
        alternatives: [
          {
            confidence: "0.9962",
            content: "like"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "44.78",
        end_time: "45.24",
        alternatives: [
          {
            confidence: "0.6762",
            content: "design"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "45.24",
        end_time: "46.03",
        alternatives: [
          {
            confidence: "0.9886",
            content: "snapshots"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: "?"
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "46.03",
        end_time: "46.24",
        alternatives: [
          {
            confidence: "0.9622",
            content: "That"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "46.24",
        end_time: "46.98",
        alternatives: [
          {
            confidence: "0.893",
            content: "storybook"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "46.99",
        end_time: "47.17",
        alternatives: [
          {
            confidence: "0.994",
            content: "that"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "47.17",
        end_time: "47.4",
        alternatives: [
          {
            confidence: "0.9802",
            content: "like"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "47.4",
        end_time: "47.8",
        alternatives: [
          {
            confidence: "0.6745",
            content: "design"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "47.8",
        end_time: "48.44",
        alternatives: [
          {
            confidence: "0.9686",
            content: "snapshots"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "48.44",
        end_time: "48.62",
        alternatives: [
          {
            confidence: "0.3573",
            content: "at"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "48.63",
        end_time: "49.09",
        alternatives: [
          {
            confidence: "0.9848",
            content: "because"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "49.09",
        end_time: "49.15",
        alternatives: [
          {
            confidence: "0.9992",
            content: "I"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "49.15",
        end_time: "49.36",
        alternatives: [
          {
            confidence: "1.0",
            content: "just"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "49.36",
        end_time: "49.51",
        alternatives: [
          {
            confidence: "0.9943",
            content: "wrote"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "49.51",
        end_time: "49.57",
        alternatives: [
          {
            confidence: "0.9925",
            content: "a"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "49.57",
        end_time: "50.1",
        alternatives: [
          {
            confidence: "0.9974",
            content: "test"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "50.11",
        end_time: "50.49",
        alternatives: [
          {
            confidence: "0.9797",
            content: "like"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "50.49",
        end_time: "50.96",
        alternatives: [
          {
            confidence: "0.5429",
            content: "to"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "51.84",
        end_time: "52.29",
        alternatives: [
          {
            confidence: "0.9564",
            content: "clarify"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "52.29",
        end_time: "52.43",
        alternatives: [
          {
            confidence: "1.0",
            content: "that"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "52.43",
        end_time: "52.54",
        alternatives: [
          {
            confidence: "1.0",
            content: "we"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "52.54",
        end_time: "52.84",
        alternatives: [
          {
            confidence: "0.9987",
            content: "send"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "52.84",
        end_time: "52.93",
        alternatives: [
          {
            confidence: "1.0",
            content: "it"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "52.93",
        end_time: "53.01",
        alternatives: [
          {
            confidence: "0.9997",
            content: "to"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "53.01",
        end_time: "53.14",
        alternatives: [
          {
            confidence: "1.0",
            content: "the"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "53.14",
        end_time: "53.43",
        alternatives: [
          {
            confidence: "0.7045",
            content: "author"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "53.43",
        end_time: "53.86",
        alternatives: [
          {
            confidence: "0.6191",
            content: "endpoint"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "53.86",
        end_time: "53.96",
        alternatives: [
          {
            confidence: "0.9988",
            content: "and"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "53.96",
        end_time: "54.07",
        alternatives: [
          {
            confidence: "0.9998",
            content: "it"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "54.07",
        end_time: "54.69",
        alternatives: [
          {
            confidence: "1.0",
            content: "redirects"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "54.69",
        end_time: "54.91",
        alternatives: [
          {
            confidence: "0.9968",
            content: "to"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "54.91",
        end_time: "55.12",
        alternatives: [
          {
            confidence: "1.0",
            content: "this"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "55.12",
        end_time: "55.42",
        alternatives: [
          {
            confidence: "0.9985",
            content: "page"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: ","
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "55.42",
        end_time: "55.61",
        alternatives: [
          {
            confidence: "0.9846",
            content: "right"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: "?"
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "55.61",
        end_time: "55.83",
        alternatives: [
          {
            confidence: "0.9861",
            content: "Like"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "55.83",
        end_time: "55.98",
        alternatives: [
          {
            confidence: "1.0",
            content: "so"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "55.98",
        end_time: "56.34",
        alternatives: [
          {
            confidence: "0.9899",
            content: "that's"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "56.34",
        end_time: "56.73",
        alternatives: [
          {
            confidence: "1.0",
            content: "good"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: "."
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "56.73",
        end_time: "56.78",
        alternatives: [
          {
            confidence: "1.0",
            content: "I"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "56.78",
        end_time: "56.95",
        alternatives: [
          {
            confidence: "0.9993",
            content: "know"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "56.95",
        end_time: "57.07",
        alternatives: [
          {
            confidence: "0.9923",
            content: "it's"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "57.07",
        end_time: "57.19",
        alternatives: [
          {
            confidence: "1.0",
            content: "going"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "57.19",
        end_time: "57.25",
        alternatives: [
          {
            confidence: "1.0",
            content: "to"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "57.25",
        end_time: "57.41",
        alternatives: [
          {
            confidence: "1.0",
            content: "do"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "57.41",
        end_time: "57.86",
        alternatives: [
          {
            confidence: "1.0",
            content: "that"
          }
        ],
        type: "pronunciation"
      },
      {
        alternatives: [
          {
            confidence: "0.0",
            content: ","
          }
        ],
        type: "punctuation"
      },
      {
        start_time: "58.01",
        end_time: "58.1",
        alternatives: [
          {
            confidence: "0.7269",
            content: "but"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "58.11",
        end_time: "58.16",
        alternatives: [
          {
            confidence: "0.9975",
            content: "I"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "58.16",
        end_time: "58.28",
        alternatives: [
          {
            confidence: "1.0",
            content: "was"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "58.28",
        end_time: "58.53",
        alternatives: [
          {
            confidence: "1.0",
            content: "wondering"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "58.53",
        end_time: "58.6",
        alternatives: [
          {
            confidence: "1.0",
            content: "if"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "58.6",
        end_time: "58.66",
        alternatives: [
          {
            confidence: "1.0",
            content: "you"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "58.66",
        end_time: "58.75",
        alternatives: [
          {
            confidence: "0.9963",
            content: "have"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "58.75",
        end_time: "58.89",
        alternatives: [
          {
            confidence: "1.0",
            content: "any"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "58.89",
        end_time: "59.07",
        alternatives: [
          {
            confidence: "0.6513",
            content: "like"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "59.07",
        end_time: "59.53",
        alternatives: [
          {
            confidence: "0.9815",
            content: "design"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "59.53",
        end_time: "60.15",
        alternatives: [
          {
            confidence: "0.9251",
            content: "snapshots"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "60.15",
        end_time: "60.23",
        alternatives: [
          {
            confidence: "0.9991",
            content: "you"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "60.23",
        end_time: "60.44",
        alternatives: [
          {
            confidence: "0.9989",
            content: "guys"
          }
        ],
        type: "pronunciation"
      },
      {
        start_time: "60.44",
        end_time: "60.75",
        alternatives: [
          {
            confidence: "1.0",
            content: "run"
          }
        ],
        type: "pronunciation"
      }
    ]
  },
  status: "COMPLETED"
};
export default function App() {
  const handleAutoSaveChanges = useCallback((something) => {
    console.log(something);
  }, []);
  /**
   * export formats:
   * https://github.com/bbc/react-transcript-editor/blob/6ebe48d3130343e8a4937a30c7a4213502550c15/packages/export-adapters/index.js
   * import amazonTranscribeToDraft from './amazon-transcribe/index';
   */
  return (
    <div className="App">
      <TranscriptEditor
        exportFormat="draftjs"
        isEditable
        handleAutoSaveChanges={handleAutoSaveChanges}
        sttJsonType="amazontranscribe"
        transcriptData={json}
        mediaUrl="https://test-transcript-zey-bucket.s3.us-east-1.amazonaws.com/video-original.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDiiC337af3GiZnHygFJk98sgdO0pZYbDm9r3q1lE5iqgIhAKjKbSN1ghd3Noq%2BYalTGufmM6%2FCcWuEvUUm8UV7eK24KogDCNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNDQ5OTMxMzM0NjYyIgxeYIbx7zzlKQjAEWAq3AKM3ZtU%2BduhxgmGvdXFDJhQopZPzfNa8JoTtTdG6cL9YdIIs7kJu01hfWQXGZW8EelBL4M%2Fy%2BxpUEiLltdDXNn5U1V1PF1hSzQ8vcQjVy7aUxejp6o5s%2Bzwj86Ud9gFvmgQiRikt7KY9nbha%2BkYSaxvTRpwi2nLNnnupxTHr4H%2BSgfQaXgXXlUEEz2Xv3d2l%2BwOQSkcseMHkATQLKmcSOkHhak4rujsh1LLE9nDPwMJ3M%2FZgXZJ5DsSOD1gP56yy2cQhLWbabq4FQH0I94IHodcLu25L2zKRjzmlN7eG5sFNfrbalO7e%2Bje51O0gqRgSnn4uNxMGRUvU8iOaoFU%2B3BgN9JVTTyx62C%2BWwZqJ9EtdSUHBVhm3Ux7rp5T%2BXIhpZM26h%2BzMQClD2G0kzTbT3WLuC64HQgEmpDaOFgNO3w0G68gJoTMLVO6w6135wzpRKVz7i7dZ3IOChAI5yownYaFkAY6sgJIbgXf8qgxQOS4V8s3eP5SN2Sj7rcrWukj7Qr0VCvlGL2AnQef7pApMCwCWkzSXBlwYF%2Bft5Y0MXOBsURlY%2Bjt8woo4%2BHY0IB710tmARUfVqRGW7SE5v8AhNix3EH0u%2Fffl9FvCppSglU9qQmF2GTMMvZmnWudcOOrH%2Fbjvywny7wpOrnDKQh8XzeuzJJApeEMWzOE1D%2FAcuMmvSrOXeUaHtt2iCUj%2Fgme9pMBMnzaDk8tyGMESOrsR4tLo6uAMuKszYRJ9%2Fi%2BtLtr8%2Bmlp7jCQRVgkiAkcYDAMxYfjfJqLe7v9z%2BgLwrjuJEdWZhZtj9W%2BPGVMW0UWcSDsUBKyjuFr6bWCdVnvIG%2BGCMlz3J0RbKUnhbrKMFlSBi01H0QPwgoM8Kly2YxLqp%2Bcx6%2BM3PyNGI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220207T180511Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=ASIAWRQP7KQDB5YEWU7J%2F20220207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=98e086f2def491198e5ac34b1bd4b188c62294271821b1e463f1333847cbb294"
      />
    </div>
  );
}
