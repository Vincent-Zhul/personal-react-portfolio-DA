import React from "react";
import Link from 'next/link';

const ProjectResume = ({ dates, type, position, url, bullets }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split("- "));

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg w-2/5">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
      <div className="w-3/5">
        {url ? (
          <Link href={url}>
            <a className="text-lg font-bold hover:underline">{position}</a>
          </Link>
        ) : (
          <h2 className="text-lg font-bold">{position}</h2>
        )}
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="list-disc">
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
