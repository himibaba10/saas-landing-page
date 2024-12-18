import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-5 sm:py-10">
        <div className="flex w-full justify-center sm:justify-between flex-wrap gap-5 sm:gap-10">
          <div className="small-compact flex items-center justify-between gap-5">
            <p className="opacity-70">Copyright, Reactive Ferdous</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy Policy
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              Terms of Use
            </p>
          </div>

          {/* Social */}
          <ul className="flex justify-center gap-3 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
