import TextFormatter from "../components/TextFormatter";
import { publications } from "../database/publications.json";

const Publications = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold border-b border-gray-200 mb-2">
        Publications
      </h1>

      <div className="mt-4">
        <ul className="space-y-8">
          {publications.map((item, index) => {
            return (
              <li key={index} className="grid grid-cols-5 gap-4">
                <div className="col-span-1 flex justify-center items-center">
                  <img src={item.image} />
                </div>
                <div className="col-span-4">
                  <a href={item.paper_url} className="text-[#00008b] leading-4">
                    <TextFormatter text={item.title} />
                  </a>
                  <div className="flex justify-start items-start gap-3">
                    {item.authors.map((_item, _index) => {
                      return (
                        <a
                          href={_item.profile}
                          className={_index === 0 ? "font-medium" : ""}
                          key={_index}>
                          {_item.name}
                          {item.authors.length !== _index + 1 ? "," : ""}
                        </a>
                      );
                    })}
                  </div>

                  {item.notes.length > 0 ? (
                    <div className="mt-1 space-y-2">
                      {item.notes.map((_item, _index) => {
                        return (
                          <div className="text-[#008000] leading-5">
                            <TextFormatter text={_item} />
                          </div>
                        );
                      })}
                    </div>
                  ) : null}

                  {item.description.length > 0 ? (
                    <div className="mt-2 leading-5">
                      <TextFormatter text={item.description} />
                    </div>
                  ) : null}

                  {item.supervisors.length > 0 ? (
                    <div className="flex justify-start items-start gap-3 mt-3">
                      <span className="text-[#00008b] font-medium">
                        Supervisor(s):{" "}
                      </span>
                      {item.supervisors.map((_item, _index) => {
                        return (
                          <a
                            href={_item.profile}
                            key={_index}
                            target="_blank"
                            className="text-blue-500">
                            {_item.name}
                            {item.supervisors.length !== _index + 1 ? "," : ""}
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Publications;
