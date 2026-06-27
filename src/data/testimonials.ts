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
      "Our previous LMS was eating 30% of our revenue in commissions and offered zero support when we needed it. We switched to LectureHead and immediately saw results. The 'Experience Before Buy' feature alone converted students who were on the fence. In 3 months, our revenue increased by 1.5x. And setup was completely hassle-free.",
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
      "I was using three different tools just to run one course — a payment gateway, a WhatsApp group, and a Zoom account. LectureHead replaced all of them. My students now have a real learning home, and I spend zero time chasing payments or sharing Zoom links. The cohort feature changed how I teach.",
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
      "The built-in community feature is what sold me. My students were asking questions in 5 different places before — now everything happens inside LectureHead. Engagement shot up, and I actually enjoy teaching again because I'm not managing chaos. The live class feature is seamless.",
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
