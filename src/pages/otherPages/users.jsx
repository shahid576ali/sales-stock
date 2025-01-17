import countries from "@/assets/images/country";
const src = countries.profile.src

const users = [
  {
    id: 1,
    name: "John Doe",
    avatar: { src },
    contact: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    status: "Active",
    position: "Software Engineer",
    joinDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: { src },
    contact: "+44 20 7123 4567",
    email: "jane.smith@example.com",
    status: "Inactive",
    position: "UI/UX Designer",
    joinDate: "2023-02-20",
  },
  {
    id: 3,
    name: "Alice Johnson",
    avatar: { src },
    contact: "+61 2 9876 5432",
    email: "alice.johnson@example.com",
    status: "Active",
    position: "Marketing Specialist",
    joinDate: "2023-03-10",
  },
  {
    id: 4,
    name: "Bob Williams",
    avatar: { src },
    contact: "+49 30 1234 5678",
    email: "bob.williams@example.com",
    status: "Active",
    position: "Finance Analyst",
    joinDate: "2023-04-05",
  },
  {
    id: 5,
    name: "Emma Brown",
    avatar: { src },
    contact: "+33 1 23 45 67 89",
    email: "emma.brown@example.com",
    status: "Inactive",
    position: "Fashion Consultant",
    joinDate: "2023-05-12",
  },
];

export default users;
