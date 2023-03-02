import { Router } from "solid-app-router";
import type { Component } from "solid-js";
import { AboutMeSlide } from "./slides/aboutme";
import { CSS } from "./slides/CSS";
import { Einsatzbereiche } from "./slides/Einsatzbereiche";
import { EinsatzbereicheIntro } from "./slides/EinsatzbereicheIntro";
import { EinsatzbereicheLoad } from "./slides/EinsatzbereicheLoad";
import { Endpoints } from "./slides/Endpoints";
import { Images } from "./slides/Images";
import { ImageIntegration } from "./slides/ImageIntegration";
import { Introduction } from "./slides/Introduction";
import { IslandHydrationAstroOptionsSlide } from "./slides/IslandHydrationAstroOptionsSlide";
import { IslandHydrationSlide } from "./slides/IslandHydrationSlide";
import { MetaFramework } from "./slides/MetaFramework";
import { MetaFrameworks } from "./slides/MetaFrameworks";
import { MPA } from "./slides/MPA";
import { MPAAndSPA } from "./slides/MPA-SPA";
import { NewProject } from "./slides/NewProject";
import { RenderingComparison } from "./slides/RenderingComparison";
import { SSRAdapters } from "./slides/SSRAdapters";
import { StartSlide } from "./slides/start";
import { Presentation } from "./solid-slide/Prensentation";
import { Slide } from "./solid-slide/Slide";
import { ImageIntegration2 } from "./slides/ImageIntegration2";
import { Einsatzbereiche2 } from "./slides/Einsatzbereiche2";
import { HandsOn } from "./slides/HandsOn";
import { AstroComponents } from "./slides/AstroComponents";
import { Danke } from "./slides/Danke";
import { UIFrameworkComponents } from "./slides/UIFrameworkComponents";
import { StylingIntro } from "./slides/StylingIntro";
import { LayoutsMDX } from "./slides/LayoutsMDX";
import { SSR } from "./slides/SSR";
import { Endpoints2 } from "./slides/Endpoints2";
import { Integrations } from "./slides/Integrations";
import { WeitereThemen } from "./slides/WeitereThemen";

const App: Component = () => {
  return (
    <div class="bg-black p-0 m-0 w-screen h-screen max-w-full overflow-hidden">
      <Router>
        <Presentation>
          <Slide class="bg-black grid content-center justify-center"></Slide>
          <StartSlide></StartSlide>
          <AboutMeSlide></AboutMeSlide>
          <Introduction />
          <MPA />
          <MPAAndSPA />
          <MetaFramework />
          <MetaFrameworks />
          <IslandHydrationSlide />
          <Slide bgImage="/jasonformat.com_islands-architecture.png"></Slide>
          <Slide class="bg-white items-center justify-center content-center flex flex-grow-0">
            <div>
              <img
                src="islands-architecture.png"
                alt="Islands architecture"
                class="max-h-[calc(100vh-100px)]"
              />
              <span class="text-sm">
                Quelle: https://jasonformat.com/islands-architecture/
              </span>
            </div>
          </Slide>
          <RenderingComparison />
          <EinsatzbereicheIntro />
          <Einsatzbereiche />
          <Einsatzbereiche2 />
          <EinsatzbereicheLoad />
          <HandsOn />
          <NewProject />
          <AstroComponents />
          <UIFrameworkComponents />
          <IslandHydrationAstroOptionsSlide />
          <StylingIntro />
          <CSS />
          <LayoutsMDX />
          <SSR />
          <SSRAdapters />
          <Images />
          <ImageIntegration />
          <ImageIntegration2 />
          <Endpoints />
          <Endpoints2 />
          <Integrations />
          <WeitereThemen />
          <Danke />
        </Presentation>
      </Router>
    </div>
  );
};

export default App;
