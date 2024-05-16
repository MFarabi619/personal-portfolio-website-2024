<!-- markdownlint-disable -->
# Personal Portfolio Website 2024
### [Project Brief](https://docs.google.com/document/d/1xX3JyhCoY1ZcdFDHziUkMAU3QRtyvLnhaLeK502Ml9o/edit?usp=sharing) | [Figma Design](https://www.figma.com/file/vvyBG2wZJKSlHk0ZiEVzrd/Personal-Portfolio-Website-2024?type=design&node-id=5%3A25&mode=design&t=0Yfu1uf0oAzN5K2X-1)

<details>
<summary>Learning Log</summary>
<br>

<details>
  <summary>Project Management</summary>
<br>
  
  - Making a project brief.
  - Separation of concerns to different team member roles.
  - Using GitHub projects more effectively.
    - Separating the backlog into swimlanes based on team member roles.
    - Setting up priority, size, role, and roadmap views.
  - Agile Methodology.
    - Recognizing that project requirements can change over time. Avoid making concrete decisions and always overestimate based on historical data at the start when you know understand the least about the project (Cone of uncertainty).
    - Working in sprints.
    - Avoiding multitasking.
    - The only measure of progress is working software.
    - Let the team make the decisions.

  
  </details>

<details>
  <summary>UI/UX Design</summary>
<br>
  
  - Doing UX research and identifying user groups.
  - Making low-fidelity and high-fidelity wireframes.
  - Gathering inspiration from [UI Patterns](https://ui-patterns.com/), [Tuk](https://tuk.dev/), [Awwards](https://www.awwwards.com/), and [Dribbble](https://dribbble.com/).
  - Using components with properties, variables, styles, and auto layout.
  - Making glassmorphic components.
  - Creating a responsive type scale that integrates tightly with components.
  - Creating a color palette based on standardized tailwind colors.
  - Relying on existing tailwind primitive tokens, and mapping them to semantic tokens for component development.
  - Creating a UI Kit and building components on top of it.
  - Iterating on past designs and coming up with different variations to compare side-by-side.
  - Creating prototypes with hover, click, and scroll interactions.

  </details>

  <details>
  <summary>Front-End Development</summary>
<br>

  - Using [pnpm](https://pnpm.io/) instead of npm or yarn.
  - Setting up [only-allow](https://github.com/supanpanCn/npm-only-allow) to enforce the use of pnpm instead of npm.
  - Adding custom scripts to the package.json.
  - Using TypeScript properly (Primitive types, function types, complex types, union types, type narrowing, object types/interfaces, type extensions, type nesting).
  - Using [Chrome DevTools](https://developer.chrome.com/docs/devtools/) and [React DevTools](https://react.dev/learn/react-developer-tools) for debugging.
  - Building UI components bottom up (or inside out) using [Storybook](https://storybook.js.org/) instead of top down (outside in).

  </details>

  <details>
  <summary>Back-End Development</summary>

    - Setting up GitHub Actions for CI/CD on cloud.
    - Creating modular, reusable actions with the option of skipping e2e tests because they take so long.
    - Caching artifacts between workflow runs with timeouts to save time and resources.
    - Using [Act](https://nektosact.com/) to test GitHub Actions locally which uses the Docker engine.

<br>
    
- Containerizing on Docker.

  </details>

</details>
