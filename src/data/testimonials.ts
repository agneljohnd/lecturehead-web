export interface Testimonial {
  quote: string;
  highlight: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
  photo?: string;
  stats: { value: string; label: string }[];
  school?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We onboard more than 400 students every month on LectureHead. Before this, we were using so many different tools and it became exhausting. One of the biggest benefits is that we no longer pay commission on our sales. We can now use that money to improve our product and invest more in research and development.",
    highlight: "The 'Experience Before Buy' feature alone converted students who were on the fence.",
    author: "Richa Marcia",
    role: "Co-founder, Error Makes Clever",
    company: "Error Makes Clever",
    avatarInitials: "RM",
    photo: "/images/faces/Richa.jpg",
    stats: [
      { value: "460+", label: "Learners in 3 months" },
      { value: "1.5x", label: "Revenue increase" },
      { value: "30%", label: "Commission escaped" },
    ],
  },
  {
    quote:
      "My team can now run classes on their own without my involvement. Earlier, we had to switch between Zoom, WhatsApp, and manual certificate approvals, which took a lot of time. With LectureHead, everything is in one place and the whole process has become much smoother.",
    highlight: "LectureHead replaced all of them. My students now have a real learning home.",
    author: "Navin Kumar",
    role: "Founder, HR Learners Hub",
    company: "HR Learners Hub",
    avatarInitials: "NK",
    photo: "/images/faces/HR Navin.jpg",
    stats: [
      { value: "300+", label: "Students enrolled" },
      { value: "2x", label: "Course completion rate" },
      { value: "₹0", label: "Commission paid" },
    ],
  },
  {
    quote:
      "LectureHead feels much more professional than any platform I have used before. Whenever I need help, their support team is always quick to respond. They have paid attention to even the smallest details, and it really shows.",
    highlight: "Engagement shot up, and I actually enjoy teaching again because I'm not managing chaos.",
    author: "Thoufique",
    role: "CEO, Grid & Goal",
    company: "Grid & Goal",
    avatarInitials: "TH",
    photo: "/images/faces/Thoufiq.jpg",
    stats: [
      { value: "1,200+", label: "Community members" },
      { value: "4.9/5", label: "Student rating" },
      { value: "8", label: "Live courses running" },
    ],
  },
];
