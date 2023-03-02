import { Slide } from "../solid-slide/Slide";
import { JSXElement } from "solid-js";
import { List, ListEntry } from "../solid-slide/List";
import { Motion } from "@motionone/solid";
import { SlideTitle } from "../solid-slide/SlideTitle";

function Contact(props: { href: string; label: string; icon: JSXElement }) {
  return (
    <div class="text-md">
      <Motion.a
        hover={{ scale: 1.1 }}
        href={props.href}
        class="flex items-center content-center p-4 text-inherit bg-gray-200 rounded-lg text-base"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="text-orange-500">{props.icon}</span>{" "}
        <span class="ml-2">{props.label}</span>
      </Motion.a>
    </div>
  );
}

export function AboutMeSlide() {
  const bgVideo = (
    <video
      src="/bg-about-me.mp4"
      autoplay
      loop
      class="bg-black h-screen w-[40vw] object-fill top-0 z-0 flex-1"
    ></video>
  );
  return (
    <Slide class="bg-gray-800 flex text-white">
      <div class="w-[60vw] text-gray-800 bg-white z-10">
        <div class="p-10">
          <SlideTitle>Über mich</SlideTitle>
          <div class="flex p-4 bg-gray-100 rounded-lg mb-10">
            <img src="/me.jpeg" class="rounded-lg w-40 mr-5" alt="" />
            <div>
              <p class="font-bold text-3xl">Sebastian Holstein</p>
              <p class="text-lg mb-10 text-slate-400 font-medium uppercase">
                Senior Software Architekt
              </p>
              <p class="flex space-x-3">
                <Contact
                  href="mailto:sebastian.holstein@adesso.de"
                  label="Mail"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  }
                />
                <Contact
                  href="https://twitter.com/Sebholstein"
                  label="@Sebholstein"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="1.5"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  }
                />
                <Contact
                  href="https://sebastian-holstein.de/"
                  label="Website"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  }
                />
              </p>
            </div>
          </div>
          <List>
            <ListEntry>Bei adesso seit 2012</ListEntry>
            <ListEntry>Architektur & Entwicklung</ListEntry>
            <ListEntry>JavaScript / TypeScript / Webtechnologien</ListEntry>
            <ListEntry>Angular, SolidJS, React</ListEntry>
            <ListEntry>Go</ListEntry>
            <ListEntry>
              <a href="https://github.com/Sebholstein">Open Source Projekte</a>
            </ListEntry>
          </List>
        </div>
      </div>
      {bgVideo}
    </Slide>
  );
}
