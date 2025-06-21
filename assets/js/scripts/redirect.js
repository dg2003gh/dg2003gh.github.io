const hostname = window.location.hostname;
const parts = hostname.split(".");

let subdomain = null;

if (parts.length > 2) {
  subdomain = parts.slice(0, parts.length - 2).join(".");

  switch (subdomain) {
    case "cloud-analyzer":
      window.location.href = "https://dg2003gh.github.io/simple-cloud-analyzer";
      break;
  }
}
