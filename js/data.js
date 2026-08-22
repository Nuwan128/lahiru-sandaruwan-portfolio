/**
 * Portfolio Data Source of Truth - Lahiru Sandaruwan
 * Strictly verified from CV data.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Lahiru Sandaruwan",
    title: "DevOps Engineer",
    tagline: "AWS | Azure | Kubernetes | Terraform | CI/CD",
    summaryShort: "DevOps Engineer with 4+ years of experience designing, automating, deploying and supporting production cloud infrastructure across AWS and Azure.",
    summaryFull: "DevOps Engineer with 4+ years of hands-on experience designing, automating, deploying, and supporting production cloud infrastructure across AWS and Azure. Experienced in managing 50+ servers and production workloads using Amazon ECS, EC2, Auto Scaling, Terraform, Docker, CI/CD, Linux, and monitoring and observability platforms. Proven experience in highly available infrastructure, production incident response, cloud security, disaster recovery, and cost optimization, including approximately USD 1,710 in documented AWS savings. Experienced in supporting enterprise, FinTech, and government platforms and mentoring junior DevOps engineers and interns.",
    location: "Kandy, Sri Lanka",
    email: "lahirusandaruwanwasantha@gmail.com",
    phone: "+94 71 572 5084",
    linkedin: "https://linkedin.com/in/lahiru-sandaruwan",
    linkedinDisplay: "linkedin.com/in/lahiru-sandaruwan",
    portfolio: "https://lahirusandaruwan.online",
    portfolioDisplay: "lahirusandaruwan.online"
  },

  impactMetrics: [
    {
      value: "50+",
      label: "Production Servers Managed",
      description: "Across AWS EC2, ECS-backed, and virtualized production environments"
    },
    {
      value: "4+",
      label: "Years of DevOps Experience",
      description: "Supporting enterprise, FinTech, and GovCloud infrastructure"
    },
    {
      value: "$1,710",
      label: "Documented AWS Cost Savings",
      description: "Achieved via RDS optimization and CloudHSM resource pruning"
    },
    {
      value: "~$15K",
      label: "Potential Twilio Charges Prevented",
      description: "Mitigated SMS abuse with AWS WAF & proactive rate limiting"
    },
    {
      value: "3",
      label: "Junior Engineers / Interns Mentored",
      description: "Trained in Linux, AWS, CI/CD pipelines, and troubleshooting"
    }
  ],

  coreExpertise: [
    {
      category: "Cloud & Infrastructure",
      icon: "cloud",
      skills: [
        "AWS", "Azure", "AWS GovCloud", "EC2", "ECS", "VPC", "ALB", 
        "Auto Scaling", "RDS", "S3", "CloudWatch", "Lambda", "SQS", 
        "CloudFront", "Route 53", "WAF", "ACM", "CloudTrail", "SES", "CloudHSM"
      ]
    },
    {
      category: "CI/CD & DevOps",
      icon: "git-merge",
      skills: [
        "AWS CodePipeline", "AWS CodeBuild", "Azure DevOps Pipelines", 
        "GitHub Actions", "Git", "Docker Hub", "SonarQube", "Trivy"
      ]
    },
    {
      category: "Containers & Orchestration",
      icon: "box",
      skills: [
        "Docker", "Amazon ECS", "Kubernetes", "MicroK8s", "Helm"
      ]
    },
    {
      category: "Infrastructure as Code",
      icon: "terminal",
      skills: [
        "Terraform", "Terraform Remote Backend", "AWS Infrastructure Provisioning"
      ]
    },
    {
      category: "Linux & Automation",
      icon: "cpu",
      skills: [
        "Ubuntu Linux", "Bash", "Shell Scripting", "Linux Administration", 
        "Cloud-init", "Service Management", "Log Analysis", "Production Troubleshooting"
      ]
    },
    {
      category: "Monitoring & Observability",
      icon: "activity",
      skills: [
        "Prometheus", "Grafana", "Loki", "Netdata", "Uptime Kuma", 
        "AWS CloudWatch", "Container Insights"
      ]
    },
    {
      category: "Networking & Security",
      icon: "shield",
      skills: [
        "Cloudflare", "AWS WAF", "IAM", "SSL/TLS", "IPsec VPN", "DNS", 
        "Firewall Configuration", "Load Balancing", "Domain Management", "ISO/IEC 27001"
      ]
    },
    {
      category: "Databases & Messaging",
      icon: "database",
      skills: [
        "Amazon RDS", "PostgreSQL", "MySQL", "MongoDB Atlas", 
        "DynamoDB", "AWS SQS", "RabbitMQ", "CloudAMQP"
      ]
    }
  ],

  capabilities: [
    {
      id: "cloud-infra",
      title: "Cloud Infrastructure",
      summary: "Designing and operating scalable, resilient AWS and Azure infrastructure for enterprise and high-availability production workloads."
    },
    {
      id: "cicd-automation",
      title: "CI/CD Automation",
      summary: "Building automated build, testing, vulnerability scanning, and multi-stage deployment pipelines across diverse tech stacks."
    },
    {
      id: "container-platforms",
      title: "Container Platforms",
      summary: "Containerizing microservices and managing production Docker and Amazon ECS workloads with robust auto-scaling and health checks."
    },
    {
      id: "iac",
      title: "Infrastructure as Code",
      summary: "Provisioning version-controlled, repeatable cloud architecture using Terraform with secure remote backend state management."
    },
    {
      id: "observability",
      title: "Observability & Reliability",
      summary: "Building monitoring, logging, alerting, and operational visibility using CloudWatch, Prometheus, Grafana, Loki, and Netdata."
    },
    {
      id: "security-resilience",
      title: "Security & Resilience",
      summary: "Implementing WAF, IAM least privilege, network security, automated backup/recovery, and ISO/IEC 27001-aligned infrastructure controls."
    }
  ],

  experience: [
    {
      role: "Software Engineer - DevOps",
      company: "Treinetic Pvt Ltd",
      period: "03/2022 – Present",
      location: "Colombo, Sri Lanka",
      highlights: [
        "Managed and supported 50+ production servers across AWS EC2, ECS-backed workloads, and virtualized infrastructure environments.",
        "Designed and maintained automated CI/CD pipelines using AWS CodePipeline, AWS CodeBuild, Azure DevOps Pipelines, and GitHub Actions.",
        "Administered multi-account AWS environments (including AWS GovCloud) and Azure resources, provisioning repeatable infrastructure using Terraform.",
        "Managed Docker and Amazon ECS production workloads, handling EC2 launch types, Auto Scaling, Application Load Balancers, and deployment troubleshooting.",
        "Engineered centralized logging and automated alerting using CloudWatch, SNS, Lambda, Prometheus, Grafana, Loki, Netdata, Uptime Kuma, and Container Insights.",
        "Hardened perimeter security with AWS WAF, Cloudflare, IAM, rate-limiting, SSL/TLS, and IPsec VPNs, mitigating SMS abuse and preventing ~$15,000 in potential charges.",
        "Reduced AWS infrastructure costs by approximately USD 1,710 through RDS rightsizing and removal of redundant CloudHSM resources.",
        "Integrated SonarQube and Trivy into CI/CD workflows, maintained disaster recovery validation, supported ISO/IEC 27001 compliance, and mentored 3 junior engineers/interns."
      ]
    }
  ],

  workflow: [
    {
      step: "01",
      name: "PLAN",
      desc: "Architecture specification, capacity planning, security baseline review, and branch strategy.",
      tools: ["Git", "Architecture RFCs"]
    },
    {
      step: "02",
      name: "CODE",
      desc: "Version-controlled infrastructure & configuration code with pre-commit validation.",
      tools: ["Git", "Terraform", "Bash"]
    },
    {
      step: "03",
      name: "BUILD",
      desc: "Automated compilation, artifact packaging, and unit test execution across pipelines.",
      tools: ["AWS CodeBuild", "Azure DevOps", "GitHub Actions"]
    },
    {
      step: "04",
      name: "SECURITY SCAN",
      desc: "Static code quality analysis and container image vulnerability inspection.",
      tools: ["SonarQube", "Trivy", "IAM Audit"]
    },
    {
      step: "05",
      name: "CONTAINERIZE",
      desc: "Optimized Docker multi-stage builds, image hardening, and registry management.",
      tools: ["Docker", "Docker Hub", "Amazon ECR/ECS"]
    },
    {
      step: "06",
      name: "DEPLOY",
      desc: "Zero-downtime rolling deployments, IaC provisioning, and load balancer traffic routing.",
      tools: ["Terraform", "Amazon ECS", "Kubernetes", "ALB"]
    },
    {
      step: "07",
      name: "MONITOR",
      desc: "Real-time telemetry, centralized logging, and automated incident alert notifications.",
      tools: ["CloudWatch", "Prometheus", "Grafana", "Loki", "Uptime Kuma"]
    },
    {
      step: "08",
      name: "OPERATE & IMPROVE",
      desc: "Proactive incident response, cost optimization, disaster recovery testing, and post-mortems.",
      tools: ["Cost Explorer", "Auto Scaling", "ISO/IEC 27001"]
    }
  ],

  certifications: [
    {
      title: "Kubernetes and Cloud-Native Associate (KCNA)",
      issuer: "KodeKloud",
      badge: "KCNA",
      type: "Orchestration & Cloud-Native"
    },
    {
      title: "Amazon Elastic Container Service (AWS ECS)",
      issuer: "KodeKloud",
      badge: "AWS ECS",
      type: "Cloud Container Workloads"
    },
    {
      title: "Jenkins",
      issuer: "KodeKloud",
      badge: "CI/CD",
      type: "Automation & Continuous Delivery"
    }
  ],

  education: {
    degree: "Bachelor of Information and Communication Technology (Honours)",
    institution: "University of Kelaniya",
    period: "2017 – 2021"
  },

  careerFocus: [
    "Cloud Infrastructure",
    "DevOps Engineering",
    "Platform Engineering",
    "CI/CD Automation",
    "Infrastructure as Code",
    "Cloud Security",
    "Observability",
    "Site Reliability",
    "Production Engineering"
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
