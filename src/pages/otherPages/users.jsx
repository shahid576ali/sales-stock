import countries from "@/assets/images/country";

const src = countries.profile.src
console.log(src);

const users = [ 
    {
      id: 1,
      name: "John Doe",
      avatar:{src},
      contact: "+1 (555) 123-4567",
      email: "john.doe@example.com",
      country: "United States",
      status: "Active",
      company: "Tech Corp",
      joinDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar:{src},
      contact: "+44 20 7123 4567",
      email: "jane.smith@example.com",
      country: "United Kingdom",
      status: "Inactive",
      company: "Design Co.",
      joinDate: "2023-02-20",
    },
    {
      id: 3,
      name: "Alice Johnson",
      avatar:{src},
      contact: "+61 2 9876 5432",
      email: "alice.johnson@example.com",
      country: "Australia",
      status: "Active",
      company: "Marketing Inc.",
      joinDate: "2023-03-10",
    },
    {
      id: 4,
      name: "Bob Williams",
      avatar:{src},
      contact: "+49 30 1234 5678",
      email: "bob.williams@example.com",
      country: "Germany",
      status: "Active",
      company: "Finance Ltd.",
      joinDate: "2023-04-05",
    },
    {
      id: 5,
      name: "Emma Brown",
      avatar:{src},
      contact: "+33 1 23 45 67 89",
      email: "emma.brown@example.com",
      country: "France",
      status: "Inactive",
      company: "Fashion SAS",
      joinDate: "2023-05-12",
  },
];

export default users