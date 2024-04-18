import { type Institutes, InstituteConfig } from "@/config/institutes";
import { type NavbarConfig, toValue } from "@/models/layout";

import MenuButton from "./desktop-nav-link";
import { FacultiesRow } from "./faculties-row";

export type NavbarProps = {
  instituteTitle: string;
  config: NavbarConfig;
};

export default function DesktopNavbar({
  config,
  institute,
}: {
  config: NavbarConfig;
  institute: Institutes;
}) {
  return (
    <nav className="relative w-full">
      <FacultiesRow logo={config.logo}></FacultiesRow>
      <div
        className="branding hidden border-black bg-rwth-branding lg:block"
        role="banner"
      >
        <div className="mx-auto max-w-[980px]">
          <span
            style={{
              marginLeft: Math.min(toValue(config.logo.width, 224), 350),
              height: Math.min(toValue(config.logo.height, 110) - 40, 100),
            }}
            className="block pl-5 pt-3 text-lg font-normal"
          >
            {InstituteConfig[institute].name}
          </span>
        </div>
      </div>
      <div className="nav-global hidden bg-rwth-branding lg:block">
        <div className="mx-auto w-full max-w-[980px]">
          <ul className="flex flex-row justify-end">
            {config.linkElements.map((linkElement, i) => {
              return (
                <MenuButton
                  href={linkElement.href}
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
