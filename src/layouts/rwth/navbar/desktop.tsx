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
        className="branding bg-rwth-branding hidden border-black lg:block"
        role="banner"
      >
        <div className="mx-auto max-w-[980px]">
          <span
            style={{
              marginLeft: Math.min(toValue(config.logo.width, 224), 350),
              height: Math.min(toValue(config.logo.height, 110) - 40, 100),
            }}
            className="block pt-3 pl-5 text-lg font-normal"
          >
            {InstituteConfig[institute].name}
          </span>
        </div>
      </div>
      <div className="nav-global bg-rwth-branding hidden lg:block">
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
