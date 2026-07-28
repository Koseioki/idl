import { NavLink, useParams } from "react-router-dom";
import "./SideNav.css";
import typesOfMarginalisation from "../../data/research-projects/marginalisation-and-digital-society/types-of-marginalisation.json";

export function SideNav() {
  // const { slug, categorySlug } = useParams();
  const { slug } = useParams();
  // const currentCategory = typesOfMarginalisation.find(
  //   (category) => category.slug === categorySlug,
  // );

  return (
    <nav className="side-nav" aria-label="Secondary">
      <div>
        <ul>
          <li>
            <NavLink to={`/research-projects/${slug}`}>
              Marginalisation and Digital Society
            </NavLink>
          </li>
          <li>
            <ul>
              <li>
                <NavLink
                  to={`/research-projects/${slug}/types-of-marginalisation`}
                >
                  Types of marginalisation
                </NavLink>
              </li>
              <li>
                <ul>
                  {typesOfMarginalisation.map((category) => (
                    <li key={category.slug}>
                      <NavLink
                        to={`/research-projects/${slug}/types-of-marginalisation/${category.slug}`}
                      >
                        {category.name}
                      </NavLink>
                      {/* {currentCategory?.slug === category.slug ? (
                        <ul>
                          {category.subcategories.map((subcategory) => (
                            <li key={subcategory.slug}>
                              <NavLink
                                to={`/research-projects/${slug}/types-of-marginalisation/${category.slug}/${subcategory.slug}`}
                              >
                                {subcategory.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      ) : null} */}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
