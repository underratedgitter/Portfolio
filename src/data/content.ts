export const profile = {
  name: "Suraj Patel",
  email: "sp9023156004@gmail.com",
  github: "https://github.com/underratedgitter",
  linkedin: "https://www.linkedin.com/in/thepatelsuraj",
  linkedinCertifications: "https://www.linkedin.com/in/thepatelsuraj/details/certifications/",
  leetcode: "https://leetcode.com/u/sp9023156004",
  bio: [
    "I'm a Software & Solutions Architect intern at D-Tech Solution Integrators in Bharuch, where I own the company's web platform end to end: the Odoo website and e-commerce store, an internal dashboard integrated through the Odoo API, and the site's migration to a new hosting platform.",
    "Outside work, I build the other half of the stack: the pipeline that ships the code, the telemetry that tells you it broke, and the system that works out why. That's what Aegis, an evidence-first SRE copilot, and my production-style CI/CD pipeline with real observability behind it are built around.",
    "Comfortable across the full incident lifecycle: detect, triage, mitigate, resolve, postmortem.",
  ],
};

export const experience = [
  {
    id: "dtech",
    range: "Aug 2026 — present",
    role: "Software & Solutions Architect Intern",
    org: "D-Tech Solution Integrators",
    location: "Bharuch, India",
    status: "current",
    description:
      "Six-month internship leading into a full-time role. I own D-Tech's web platform end to end: the Odoo website, its connected e-commerce store, and an internal organisation dashboard integrated through the Odoo API. I'm now leading the migration of the site to a new hosting platform, keeping the store and its Odoo CRM integration running through the move.",
  },
  {
    id: "bindu",
    range: "Feb 2026",
    role: "Open Source Contributor — Bindu",
    org: "GetBindu/Bindu",
    location: "Remote",
    status: "merged",
    description:
      "Replaced generic Exception catches with specific exception types to improve Python error handling; clarified setup docs for Hindi-speaking users (API key configuration, free OpenRouter model options). Bindu is the identity, communication, and payments layer for AI agents — 9.3k stars, 440 forks.",
  },
  {
    id: "gdsc",
    range: "Aug 2023 — Jan 2024",
    role: "Cloud Event Manager",
    org: "Google Developer Student Club (GDSC), P.P. Savani University",
    location: "Surat, India",
    status: "complete",
    description:
      "Facilitated 25+ hands-on cloud labs and 40 coding sessions, mentoring a 12-member team in building and deploying 8 applications on Google Cloud Platform. Led cloud-focused technical initiatives that helped the college reach the top position among institutions in South Gujarat.",
  },
  {
    id: "accenture",
    range: "Oct 2023",
    role: "Data Analytics & Visualization — Job Simulation",
    org: "Accenture North America / Forage",
    location: "Remote",
    status: "complete",
    description:
      "Cleaned and modeled 7 datasets to shape social-media campaign strategy for a client brief, using Excel and Matplotlib.",
  },
];

export const proofs = [
  { claim: "Every automated fix is bounded, allowlisted, and needs a named human approver.", source: "Aegis" },
  { claim: "Code goes from push to live in under five minutes, gated on the tests passing.", source: "CI/CD Pipeline" },
  { claim: "Not one long-lived AWS key. CI plans every pull request through OIDC.", source: "Terraform AWS ECS Platform" },
  { claim: "A GPU pipeline cut five minutes of processing down to twenty seconds.", source: "RAG Teaching Assistant" },
  { claim: "25+ cloud labs and 40 sessions that helped the university reach #1 in South Gujarat.", source: "GDSC, Cloud Event Manager" },
  { claim: "A merged refactor to an agent-infrastructure project with 9.3k stars.", source: "Bindu, open source" },
];

export const projects = [
  {
    id: "aegis",
    name: "Aegis",
    year: "2026",
    tagline: "Evidence-first SRE copilot",
    href: "https://github.com/underratedgitter/Aegis",
    stack: ["Python", "FastAPI", "Docker Compose", "Prometheus", "Grafana", "Loki", "Promtail", "SQLite"],
    description:
      "A full observability and incident-response stack watching a checkout-and-inventory microservice pair. A detection-and-correlation engine pairs threshold alerts with a rolling z-score anomaly detector, merging related signals into one root-caused incident instead of duplicate alerts.",
    details: [
      "An evidence-citing investigator with four read-only tools (metrics, logs, runbooks, incident timeline) assembles auditable evidence before proposing a remediation, behind a human-approval safety gate — every fix is a bounded, allowlisted action requiring a named approver and a second API call, with no shell, Docker socket, or arbitrary command access.",
      "Bounded chaos injection (latency, 5xx errors, dependency failure, CPU stress) validates detection and MTTR end to end, with incident history and MTTR calculation persisted in SQLite.",
      "Runs fully offline — a local fallback mode completes the whole detect → investigate → approve workflow deterministically, with no API key required.",
    ],
    featured: true,
  },
  {
    id: "cicd",
    name: "CI/CD Pipeline Automation",
    year: "2026",
    tagline: "Push to cloud in under five minutes",
    href: "https://github.com/underratedgitter/CI-CD-Pipeline-Automation-with-Docker-Cloud-Deployment",
    stack: ["Node.js", "Express", "Docker", "Kubernetes", "Helm", "GitHub Actions", "Prometheus", "Grafana"],
    description:
      "A containerized Node/Express API on a multi-stage Alpine image — non-root user, layer caching tuned for rebuild speed. A four-stage GitHub Actions pipeline (lint & test → security audit → build, scan & push → deploy) takes code from push to live in under 5 minutes.",
    details: [
      "Trivy scans every image before it ships, and the image is deployed by digest rather than tag, so what runs is exactly what was scanned. Docker Hub and deploy-hook auth route through GitHub Encrypted Secrets — no hardcoded credentials.",
      "Prometheus scraping with Grafana dashboards and alert rules that fire on the things that actually page you: latency, error rate, heap growth, event-loop lag, and traffic falling off a cliff.",
      "A Helm chart runs the same service on Kubernetes — HPA, disruption budget, network policy, ServiceMonitor, and a `helm test` that fails the release if the endpoints are wrong. Moving there is what exposed a readiness probe returning 200 while the pod drained.",
    ],
    featured: true,
  },
  {
    id: "terraform",
    name: "Terraform AWS ECS Platform",
    year: "2026",
    tagline: "The infrastructure under the pipeline",
    href: "https://github.com/underratedgitter/terraform-aws-ecs-platform",
    stack: ["Terraform", "AWS", "ECS", "IAM", "OIDC"],
    description:
      "Terraform that provisions a working AWS environment for a containerized web service: network, container hosts, load balancer, registry, logs, and alarms. Everything is a module, state lives in S3 with locking, and CI validates and plans on every pull request through GitHub OIDC — no long-lived AWS key anywhere.",
    details: [
      "VPC across two availability zones, an ECS cluster on EC2 with a capacity provider, an ALB, ECR with a lifecycle policy, scoped IAM, and CloudWatch alarms.",
      "Written for the free tier and honest about the trade that makes it fit: no NAT gateway by default, so hosts sit in public subnets whose only ingress rule sources from the load balancer's security group — one flag moves them private.",
      "The execution role is hand-written and scoped to a single repository ARN rather than the managed policy, which would grant ECR read across the whole account.",
    ],
    featured: true,
  },
  {
    id: "rag",
    name: "RAG Teaching Assistant",
    year: "2026",
    tagline: "Lecture video in, answers with timestamps out",
    href: "https://github.com/underratedgitter/RAG-teaching-assistant",
    stack: ["Python", "PyTorch", "CUDA", "Ollama", "NumPy", "Pandas", "Scikit-learn", "FFmpeg"],
    description:
      "Drop in a lecture recording, ask a question, get the answer and the exact moment it was said. Speech transcription feeds a vector index; queries return in under a second across 1,000+ text chunks.",
    details: [
      "Batch chunking and parallel processing on CUDA cut a run from 5 minutes on CPU to 20 seconds on GPU — a 15x speedup.",
      "End-to-end pipeline: speech transcription → vector embeddings → timestamp-based retrieval, turning passive video into an interactive Q&A system.",
    ],
    featured: true,
  },
  {
    id: "devops-lab",
    name: "devops-lab",
    year: "2026",
    tagline: "Working notes, honest about their edges",
    href: "https://github.com/underratedgitter/devops-lab",
    stack: ["Python", "Bash", "Prometheus", "Docker"],
    description:
      "Sixteen guides with real depth — Linux commands and permissions, TCP/IP, Kubernetes concepts, Terraform state, Dockerfile practices, observability — five of them written out of the pipeline and Aegis projects, so the examples are code that actually runs. The README says plainly which directories are still stubs.",
    details: [],
    featured: false,
  },
  {
    id: "sundown",
    name: "Sundown Studios",
    year: "2023",
    tagline: "Pixel-perfect agency site clone",
    href: "https://github.com/underratedgitter/sundown",
    stack: ["HTML5", "CSS3", "JavaScript", "Locomotive Scroll", "Swiper.js"],
    description:
      "An animation-rich, front-end-only recreation of the Sundown Studios agency site — scroll-driven effects, an animated splash loader, infinite marquee, and hover-driven image previews, all in vanilla web technologies.",
    details: [],
    featured: false,
  },
  {
    id: "tts",
    name: "Text-to-Audio Generator",
    year: "2026",
    tagline: "Text in, MP3 voiceover out",
    href: "https://github.com/underratedgitter/text-to-audio-generator",
    stack: ["Python", "edge-tts", "gTTS"],
    description:
      "A minimal but flexible Python tool converting text into MP3 voiceovers, with multiple TTS engines, configurable voice settings, and both a desktop GUI and a CLI interface.",
    details: [],
    featured: false,
  },
];

export const skillGroups = [
  {
    title: "Cloud & IaC",
    items: ["AWS (EC2, ECS, ALB, ECR, S3, IAM, VPC, CloudWatch, CloudTrail)", "GCP (Compute Engine, Cloud Run, Storage, IAM, VPC, Logging)", "Terraform (modules, remote state, GitHub OIDC)", "Oracle Cloud", "Render"],
  },
  {
    title: "Containers & CI/CD",
    items: ["Docker", "Docker Compose", "Kubernetes", "Helm", "GitHub Actions", "multi-stage builds", "image tagging & rollback", "GitHub Encrypted Secrets", "Trivy vulnerability scanning"],
  },
  {
    title: "Observability & Monitoring",
    items: ["Prometheus", "Grafana", "Loki", "Promtail", "structured/JSON logging", "alerting rules", "P50/P95/P99 latency"],
  },
  {
    title: "Incident Response & Reliability",
    items: ["detection & correlation", "runbook-driven triage", "blameless postmortems", "MTTR tracking", "chaos injection testing", "anomaly detection"],
  },
  {
    title: "Linux & Networking",
    items: ["process management", "systemd / journalctl", "shell scripting", "file permissions", "TCP/IP", "DNS", "HTTP/HTTPS", "curl / traceroute / dig"],
  },
  {
    title: "Programming, Backend & Databases",
    items: ["Python", "Bash", "C / C++", "JavaScript (Node.js)", "SQL", "FastAPI", "Express", "REST APIs", "Odoo (API, website, e-commerce)", "MySQL", "MongoDB", "SQLite"],
  },
  {
    title: "Applied AI/ML & Data",
    items: ["PyTorch", "NumPy", "Pandas", "Scikit-learn", "RAG", "vector embeddings", "NLP", "Ollama", "Whisper", "CUDA"],
  },
];

export const certifications = [
  { name: "AWS Cloud Foundations", org: "Amazon Web Services", date: "May 2026" },
  { name: "Machine Learning for Data Science Projects", org: "IBM", date: "Sep 2025" },
  { name: "Learning Analytical Tools", org: "NPTEL", date: "Nov 2025" },
  { name: "Business Intelligence & Analytics (BUS250)", org: "Saylor Academy", date: "Nov 2025" },
  { name: "Affective Computing", org: "NPTEL", date: "May 2026" },
  { name: "Android App Development", org: "Vanderbilt University", date: "Mar 2025" },
];

export const education = {
  degree: "Bachelor of Technology, Computer Science & Engineering",
  school: "P.P. Savani University, Surat, India",
  range: "Jul 2023 — Jun 2027",
};
