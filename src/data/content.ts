export const profile = {
  name: "Suraj Patel",
  roles: ["DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer"],
  location: "Bharuch, Gujarat, India",
  email: "sp9023156004@gmail.com",
  github: "https://github.com/underratedgitter",
  githubHandle: "github.com/underratedgitter",
  linkedin: "https://www.linkedin.com/in/thepatelsuraj",
  leetcode: "https://leetcode.com/u/sp9023156004",
  resumeNote:
    "DevOps, Cloud, and Site Reliability focused Computer Science undergraduate with hands-on Linux, networking, AWS/GCP infrastructure, containerization, CI/CD, and incident-response foundations from a self-directed five-month systems training program.",
  bio: [
    "I'm a Software & Solutions Architect at D-Tech Solution Integrators, where I build custom software for manufacturing plants across the Bharuch–Ankleshwar industrial belt — systems that have to hold up on a shop floor, where downtime is counted in lost production, not error budgets.",
    "That's shaped what I build outside work too: the pipeline that ships the code, the telemetry that tells you it broke, and the system that works out why. I spent five months going deep on Linux, networking, and cloud infrastructure from first principles, then used that to build Aegis — an evidence-first SRE copilot — and a production-style CI/CD pipeline with real observability behind it.",
    "Comfortable across the full incident lifecycle: detect, triage, mitigate, resolve, postmortem.",
  ],
};

export const systemInfo = [
  { key: "role", value: "Software & Solutions Architect @ D-Tech" },
  { key: "focus", value: "DevOps · Cloud · SRE" },
  { key: "location", value: "Bharuch, Gujarat, IN" },
  { key: "shell", value: "bash / zsh" },
  { key: "kernel", value: "incident-response 5.0" },
  { key: "uptime", value: "since 2023" },
  { key: "education", value: "B.Tech CSE, PPSU ’27" },
];

export const experience = [
  {
    id: "dtech",
    range: "current",
    role: "Software & Solutions Architect",
    org: "D-Tech Solution Integrators",
    location: "Bharuch, India",
    status: "current",
    description:
      "Custom software for manufacturing plants across the Bharuch–Ankleshwar industrial belt. Systems that have to hold up on a shop floor, where downtime is counted in lost production rather than error rates.",
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

export const projects = [
  {
    id: "aegis",
    name: "Aegis",
    tagline: "Evidence-first SRE copilot",
    href: "https://github.com/underratedgitter/Aegis",
    stack: ["Python", "FastAPI", "Docker Compose", "Prometheus", "Grafana", "Loki", "Promtail", "SQLite"],
    metrics: ["4 read-only evidence tools", "human-approval safety gate", "offline fallback mode"],
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
    tagline: "Push to cloud in under five minutes",
    href: "https://github.com/underratedgitter/CI-CD-Pipeline-Automation-with-Docker-Cloud-Deployment",
    stack: ["Node.js", "Express", "Docker", "Kubernetes", "Helm", "GitHub Actions", "Prometheus", "Grafana"],
    metrics: ["4-stage pipeline", "<5 min push-to-live", "deploy by digest"],
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
    name: "terraform-aws-ecs-platform",
    tagline: "The infrastructure under the pipeline",
    href: "https://github.com/underratedgitter/terraform-aws-ecs-platform",
    stack: ["Terraform", "AWS", "ECS", "IAM", "OIDC"],
    metrics: ["zero long-lived AWS keys", "S3 + DynamoDB state locking", "CI plans every PR"],
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
    tagline: "Lecture video in, answers with timestamps out",
    href: "https://github.com/underratedgitter/RAG-teaching-assistant",
    stack: ["Python", "PyTorch", "CUDA", "Ollama", "NumPy", "Pandas", "Scikit-learn", "FFmpeg"],
    metrics: ["15x speedup (5min → 20s)", "sub-second search", "1,000+ chunks indexed"],
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
    tagline: "Working notes, honest about their edges",
    href: "https://github.com/underratedgitter/devops-lab",
    stack: ["Python", "Bash", "Prometheus", "Docker"],
    metrics: ["16 in-depth guides"],
    description:
      "Sixteen guides with real depth — Linux commands and permissions, TCP/IP, Kubernetes concepts, Terraform state, Dockerfile practices, observability — five of them written out of the pipeline and Aegis projects, so the examples are code that actually runs. The README says plainly which directories are still stubs.",
    details: [],
    featured: false,
  },
  {
    id: "sundown",
    name: "Sundown Studios",
    tagline: "Pixel-perfect agency site clone",
    href: "https://github.com/underratedgitter/sundown",
    stack: ["HTML5", "CSS3", "JavaScript", "Locomotive Scroll", "Swiper.js"],
    metrics: ["zero frameworks"],
    description:
      "An animation-rich, front-end-only recreation of the Sundown Studios agency site — scroll-driven effects, an animated splash loader, infinite marquee, and hover-driven image previews, all in vanilla web technologies.",
    details: [],
    featured: false,
  },
  {
    id: "tts",
    name: "Text-to-Audio Generator",
    tagline: "Text in, MP3 voiceover out",
    href: "https://github.com/underratedgitter/text-to-audio-generator",
    stack: ["Python", "edge-tts", "gTTS"],
    metrics: ["CLI + GUI"],
    description:
      "A minimal but flexible Python tool converting text into MP3 voiceovers, with multiple TTS engines, configurable voice settings, and both a desktop GUI and a CLI interface.",
    details: [],
    featured: false,
  },
];

export const skillGroups = [
  {
    title: "Cloud",
    items: ["AWS (EC2, ECS, S3, IAM, VPC, CloudWatch, CloudTrail)", "GCP (Compute Engine, Cloud Run, Storage, IAM, VPC, Logging)", "Oracle Cloud", "Render"],
  },
  {
    title: "Containers & CI/CD",
    items: ["Docker", "Docker Compose", "Kubernetes", "Helm", "GitHub Actions", "multi-stage builds", "image tagging & rollback", "GitHub Encrypted Secrets"],
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
    items: ["Python", "Bash", "C / C++", "JavaScript (Node.js)", "SQL", "FastAPI", "Express", "REST APIs", "MySQL", "MongoDB", "SQLite"],
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
