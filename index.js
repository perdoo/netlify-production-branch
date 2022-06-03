import * as core from "@actions/core";
import { NetlifyAPI } from "netlify";

const setProductionBranch = async (netlifyClient, siteId, branch) => {
  const site = await netlifyClient.updateSite({
    site_id: siteId,
    body: {
      build_settings: {
        branch: branch,
      },
    },
  });

  if (site.build_settings.repo_branch === branch) {
    core.info(`The branch has been updated to '${branch}'.`);
  } else {
    core.setFailed("The branch hasn't been updated.");
  }
};

const run = async () => {
  try {
    const netlifyToken = core.getInput("netlifyToken");
    const siteId = core.getInput("siteId");
    const branch = core.getInput("branch");
    core.setSecret("netlifyToken");

    const netlifyClient = new NetlifyAPI(netlifyToken);

    await setProductionBranch(netlifyClient, siteId, branch);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
