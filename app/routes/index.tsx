import type { MetaFunction, LinksFunction } from "remix";
import indexStyles from '~/styles/pages/index.css';


// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Brainzy!",
    description: "Welcome to Brainzy!"
  };
};

export let links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: indexStyles,
    }
  ]
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <div className="main__index">
      <h1>Welcome to Brainzy!</h1>

      <p>
        This is a Work In Progress project, so it's
        not ready yet.
      </p>

      <p>
        We will be releasing it soon, so stay tuned! 🤗
      </p>

      <div className="main__links">
        <a href="https://github.com/doulovera/brainzy/" target="_blank" rel="noopener noreferrer">
          Github Repo!
        </a>
        
        <a href="https://twitter.com/doulovera" target="_blank" rel="noopener noreferrer">
          @doulovera's twitter
        </a>
      </div>
    </div>
  );
}
