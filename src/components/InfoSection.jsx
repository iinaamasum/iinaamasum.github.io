import TextFormatter from './TextFormatter';


const InfoSection = ({
  title = "[Section Title]",
  description,
  bulletPoints = []
}) => {
  return (
    <div className='mt-12'>
          <h1 className="text-2xl font-bold border-b border-gray-200 mb-2">{title}</h1>
          {
            description ? (
              <div>
                <TextFormatter text={description} />
              </div>
            ) : null
          }
          <div className="">
            <ul>
              {bulletPoints.map((item, index) => {
                return (
                  <li key={index} className="list-disc ml-6">
                    <TextFormatter text={item} />
                  </li>
                );
              })}
            </ul>
          </div>
    </div>
  )
}

export default InfoSection;