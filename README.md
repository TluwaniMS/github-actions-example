### What Are GitHub Actions?

GitHub Actions is a powerful CI/CD (Continuous Integration/Continuous Deployment) and automation platform provided by GitHub. It enables developers to define, manage, and execute workflows directly within their GitHub repositories to automate tasks like building, testing, deploying code, and maintaining repositories.

---

### Key Components of GitHub Actions

#### 1. Workflows
Workflows are the core automation mechanism in GitHub Actions. Defined using YAML files stored in the `.github/workflows` directory of a repository, they outline:
- What tasks to perform.
- When to execute them.

Workflows can automate custom scripts, complex build pipelines, or trigger deployments seamlessly.

---

#### 2. Events
Events are triggers that start workflows. They represent specific actions or occurrences, such as:
- Pushes to a branch.
- Pull request creation.
- Scheduled time-based triggers.

These events initiate the automation processes specified in workflows.

---

#### 3. Jobs
A job is a collection of steps within a workflow, each executed sequentially. Key characteristics include:
- Isolation: Each job runs in its own environment (called a runner).
- Independence or Dependency: Jobs can run independently or depend on the outcomes of other jobs.

---

#### 4. Actions
Actions are reusable units of code designed to perform specific tasks within workflows. They simplify automation by allowing you to use:
- Prebuilt actions available from the GitHub Marketplace.
- Custom actions tailored to your specific needs.

---

#### 5. Runners
Runners are the servers (virtual or physical machines) that execute the jobs in workflows. They provide the environment with:
- The required operating system.
- Preinstalled tools and dependencies.

Runners ensure that your workflows are executed in a consistent and reliable environment.

---

### Summary
GitHub Actions streamlines the automation of development workflows, making it easy to implement CI/CD practices and other repetitive tasks. By leveraging components like workflows, events, jobs, actions, and runners, teams can build scalable and efficient pipelines tailored to their needs.

# Github Actions Quick Examples.

## About Repository:

This is a fundamental repository I've set up to explore GitHub actions, focusing on:

- Installation of Node packages
- Execution of a Node script within custom actions
- Testing if statements
- Modifying global environment variables during job execution
- Finally, retrieving and displaying the environment variable via a Node script.


