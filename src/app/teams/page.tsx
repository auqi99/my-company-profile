"use client";

import { useEffect, useState } from "react";
import Ballpit from "@/components/ui/ballpit";
import TiltedCard from "@/components/ui/tilted-card";

interface TeamMember {
  id: number;
  name: string;
  image: string;
  profession: string;
  contact: string;
}

const professions = {
  male: [
    "Software Engineer",
    "UI/UX Designer",
    "Data Analyst",
    "DevOps Engineer",
    "Project Manager",
  ],
  female: [
    "Product Manager",
    "Frontend Developer",
    "Backend Developer",
    "Mobile Developer",
    "QA Engineer",
  ],
};

// Fungsi untuk memilih profesi acak berdasarkan gender
const getRandomProfession = (gender: string) => {
  const list = gender === "male" ? professions.male : professions.female;
  return list[Math.floor(Math.random() * list.length)];
};

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6", {
          signal,
        });
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        const members = data.results.map(
          (
            user: {
              name: { first: string; last: string };
              picture: { large: string };
              gender: string;
            },
            index: number,
          ) => {
            const fullName = `${user.name.first} ${user.name.last}`;
            return {
              id: index + 1,
              name: fullName,
              image: user.picture.large,
              profession: getRandomProfession(user.gender),
              contact: `@${fullName.replace(/\s+/g, "").toLowerCase()}`,
            };
          },
        );
        setTeamMembers(members);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name !== "AbortError")
            console.error("Error fetching team members:", error.message);
        } else {
          console.error("Unknown error occurred");
        }
      }
    };

    fetchTeamMembers();
    return () => controller.abort();
  }, []);

  return (
    <section className="container relative">
      <p className="mt-10 text-center text-3xl font-extrabold">
        Let's Meet Our Team
      </p>

      {/* Ballpit sebagai Background */}
      <div className="relative max-h-[700px] min-h-[700px] w-full overflow-hidden">
        <Ballpit
          count={200}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
        />

        {/* Grid TiltedCard */}
        <div className="absolute inset-0 z-10 grid grid-cols-2 place-items-center gap-4 md:grid-cols-3">
          {teamMembers.map((member) => (
            <TiltedCard
              key={member.id}
              imageSrc={member.image}
              altText={`Photo of ${member.name}, a ${member.profession}`}
              captionText={
                <>
                  {member.name} - {member.profession} <br />
                  <a
                    href={`https://instagram.com/${member.contact.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${member.name}'s Instagram`}
                    className="text-blue-400 hover:underline"
                  >
                    {member.contact}
                  </a>
                </>
              }
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="180px"
              imageWidth="180px"
              rotateAmplitude={10}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
