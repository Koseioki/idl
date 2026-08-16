import resourcesData from "../../data/resources/resources.json";
import "./ResourceDetail.css";
import { useParams } from "react-router-dom";
import { H1 } from "../../components/header-and-footer/H1";
import { ResourceFormat } from "../../components/resources/ResourceFormat";
import { resolveResourceImageUrl } from "../../utils/resolveResourceImageUrl";
import { Note } from "../../components/global/Note";
import { ResourceCategory } from "../../components/resources/ResourceCategory";

const languageDisplayNames = new Intl.DisplayNames(["en"], {
  type: "language",
});

export function ResourceDetail() {
  const { slug } = useParams();
  const resource = resourcesData.find(
    (res) => res.slug === slug || res.id === slug,
  );
  const imageUrl = resolveResourceImageUrl(resource?.image);

  return (
    <main id="main-content">
      <div className="resource-detail-wrapper">
        <H1>
          {resource?.title ?? "Resource Detail"}{" "}
          {resource?.language
            ? `(in ${languageDisplayNames.of(resource.language) ?? resource.language})`
            : null}
        </H1>

        {resource?.subtitle ? (
          <p className="resource-subtitle">{resource.subtitle}</p>
        ) : null}

        {resource?.note ? <Note title="Note:"><p>{resource.note}</p></Note> : null}

        <div className="resource-image-wrapper">
          {imageUrl ? (
            <a href={resource?.source}>
              
              <img src={imageUrl} alt="Open resource" />
           
            </a>
          ) : null}
        </div>

        <h2>Details</h2>
          <dl>
            {resource?.format ? (
              <>
                <dt>Format:</dt>
                <dd>
                  <ResourceFormat format={resource.format} />
                </dd>
              </>
            ) : null}
            {resource?.category ? (
              <>
                <dt>Category:</dt>
                <dd>
                  <ResourceCategory category={resource.category} />
                </dd>
              </>
            ) : null}
            {resource?.author ? <dt>Author:</dt> : null}
            {resource?.author ? <dd>{resource.author}</dd> : null}

            <dt>Language:</dt>
            <dd>
              {resource?.language
                ? languageDisplayNames.of(resource.language)
                : "English"}
            </dd>

            {resource?.originalTitle ? <dt>Original title:</dt> : null}
            {resource?.originalTitle ? (
              <dd lang={resource.language}>
                <em>{resource.originalTitle}</em>
              </dd>
            ) : null}

            {resource?.edition ? <dt>Edition:</dt> : null}
            {resource?.edition ? <dd>{resource.edition}</dd> : null}

            {resource?.year ? <dt>Year:</dt> : null}
            {resource?.year ? <dd>{resource.year}</dd> : null}

            {resource?.publisher ? <dt>Publisher:</dt> : null}
            {resource?.publisher ? <dd>{resource.publisher}</dd> : null}

            {resource?.source ? <dt>Source:</dt> : null}
            {resource?.source ? (
              <dd>
                <a href={resource.source}>Open the resource</a>
              </dd>
            ) : null}
          </dl>
        
      </div>
    </main>
  );
}
