export interface LinkData {
  title: string;
  url: string;
  icon: string;
}

export interface SectionData {
  title: string;
  links: LinkData[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileConfig {
  profileImage: string;
  name: string;
  about: string;
  socialLinks: SocialLink[];
  sections: SectionData[];
}

export const profileConfig: ProfileConfig = {
  profileImage: "/profile.jpeg",
  name: "Your Name",
  about: "🚀 DevOps & Platform Engineer | Building scalable infrastructure with a dash of creativity",
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yourusername/',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Website',
      url: 'https://yourusername.github.io',
      icon: 'fas fa-globe'
    }
  ],
  sections: [
    {
      title: "Professional",
      links: [
        { title: "GitHub", url: "https://github.com/yourusername", icon: "Github" },
        { title: "LinkedIn", url: "https://www.linkedin.com/in/yourusername/", icon: "Linkedin" },
        { title: "Portfolio", url: "https://yourusername.github.io", icon: "Globe" },
        { title: "Resume", url: "/resume.pdf", icon: "FileText" },
        { title: "Email Me", url: "mailto:your.email@example.com", icon: "Mail" }
      ]
    },
    {
      title: "Social",
      links: [
        { title: "Twitter/X", url: "https://twitter.com/yourusername", icon: "Twitter" },
        { title: "Discord", url: "https://discord.gg/yourusername", icon: "MessageCircle" },
        { title: "Instagram", url: "https://instagram.com/yourusername", icon: "Instagram" },
        { title: "YouTube", url: "https://youtube.com/@yourusername", icon: "Youtube" },
        { title: "Twitch", url: "https://twitch.tv/yourusername", icon: "Twitch" }
      ]
    },
    {
      title: "Blog Content",
      links: [
        { title: "How to Structure Your Argo CD Repositories Using Application Sets", url: "https://blog.yourdomain.com/argo-cd-app-sets", icon: "BookOpen" },
        { title: "Complete Guide to Setting Up Production-Ready Kubernetes Clusters with Monitoring and Logging", url: "https://blog.yourdomain.com/k8s-production-setup", icon: "Code" },
        { title: "Docker Multi-Stage Builds: Optimizing Container Images for Production Deployments", url: "https://blog.yourdomain.com/docker-multistage", icon: "Briefcase" },
        { title: "CI/CD Pipeline Best Practices for Modern Cloud-Native Applications", url: "https://blog.yourdomain.com/cicd-best-practices", icon: "Zap" },
        { title: "Infrastructure as Code with Terraform: From Beginner to Advanced Techniques", url: "https://blog.yourdomain.com/terraform-guide", icon: "Globe" },
        { title: "Monitoring and Observability in Microservices Architecture", url: "https://blog.yourdomain.com/microservices-monitoring", icon: "Star" },
        { title: "Short Guide", url: "https://blog.yourdomain.com/short", icon: "Heart" },
        { title: "GitOps Workflow Implementation with ArgoCD, Helm, and Kubernetes for Scalable Application Deployment", url: "https://blog.yourdomain.com/gitops-workflow", icon: "Users" }
      ]
    },
    {
      title: "Content & Blog",
      links: [
        { title: "Main Blog", url: "https://blog.yourdomain.com", icon: "BookOpen" },
        { title: "Tech Articles", url: "https://yourdomain.com/articles", icon: "Code" },
        { title: "DevOps Tutorials", url: "https://yourdomain.com/devops", icon: "Briefcase" },
        { title: "Weekly Newsletter", url: "https://newsletter.yourdomain.com", icon: "Mail" },
        { title: "Podcast", url: "https://podcast.yourdomain.com", icon: "Music" }
      ]
    },
    {
      title: "Projects & Tools",
      links: [
        { title: "Docker Tools", url: "https://github.com/yourusername/docker-tools", icon: "Code" },
        { title: "K8s Templates", url: "https://github.com/yourusername/k8s-templates", icon: "Briefcase" },
        { title: "Infrastructure Boilerplate", url: "https://github.com/yourusername/infra-boilerplate", icon: "Zap" },
        { title: "CI/CD Pipeline Generator", url: "https://cicd.yourdomain.com", icon: "Star" },
        { title: "Monitoring Stack", url: "https://monitoring.yourdomain.com", icon: "Users" },
        { title: "API Gateway Templates", url: "https://github.com/yourusername/api-gateway", icon: "Globe" }
      ]
    },
    {
      title: "Courses & Learning",
      links: [
        { title: "DevOps Masterclass", url: "https://course.yourdomain.com/devops", icon: "BookOpen" },
        { title: "Kubernetes Course", url: "https://course.yourdomain.com/k8s", icon: "Star" },
        { title: "Docker Deep Dive", url: "https://course.yourdomain.com/docker", icon: "Code" },
        { title: "AWS Certification Guide", url: "https://course.yourdomain.com/aws", icon: "Briefcase" },
        { title: "Free Resources", url: "https://resources.yourdomain.com", icon: "Heart" }
      ]
    },
    {
      title: "Community & Support",
      links: [
        { title: "Community Discord", url: "https://discord.gg/your-community", icon: "MessageCircle" },
        { title: "Mentorship Program", url: "https://mentorship.yourdomain.com", icon: "Users" },
        { title: "1-on-1 Consulting", url: "https://consulting.yourdomain.com", icon: "Briefcase" },
        { title: "Support My Work", url: "https://buymeacoffee.com/yourusername", icon: "Heart" },
        { title: "Sponsor Projects", url: "https://github.com/sponsors/yourusername", icon: "Star" }
      ]
    }
  ]
}; 