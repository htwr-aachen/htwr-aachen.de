import { Sheet } from "@/components/ui/sheet";
import { type Institutes, InstituteConfig } from "@/config/institutes";
import type { Institute } from "@/models/institutes";
import { type NavbarConfig, toValue } from "@/models/layout";

import MenuButton from "./desktop-nav-link";
import { FacultiesRow } from "./faculties-row";
import MobileSidenav from "./mobile-sidenav";

export default function Navbar({
  config,
  institute,
}: {
  config: NavbarConfig;
  institute: Institutes;
}) {
  const instituteConfig = InstituteConfig[institute] as Institute;
  return (
    <nav className="relative w-full border-b-2 border-black/10">
      <Sheet>
        <FacultiesRow logo={config.logo}></FacultiesRow>
        <MobileSidenav config={config} />
      </Sheet>
      <div className="hidden bg-rwth-branding lg:block">
        <div className="mx-auto max-w-[980px]">
          <span
            style={{
              marginLeft: Math.min(toValue(config.logo.width, 224), 350),
              height: Math.min(toValue(config.logo.height, 110) - 40, 100),
            }}
            className="block pl-5 pt-3 text-lg font-normal"
          >
            {instituteConfig?.displayName ||
              instituteConfig?.fullName ||
              instituteConfig.name}
          </span>
        </div>
      </div>
      <div className="nav-global hidden bg-rwth-branding lg:block">
        <div className="mx-auto w-full max-w-[980px]">
          <ul className="flex flex-row justify-end">
            {config.linkElements.map((linkElement, i) => {
              return (
                <MenuButton
                  href={linkElement.href || "/"}
                  path={linkElement.path || linkElement.href.toString() || "/"}
                  key={linkElement.path + linkElement.name + i}
                >
                  {linkElement.name.toUpperCase()}
                </MenuButton>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
