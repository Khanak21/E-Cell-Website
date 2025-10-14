import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const CampusAmbassadorPage = () => {
  // Dummy data for campus ambassadors
  const ambassadors = [
    {
      name: "Pakhi rao",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE1/view?usp=sharing"
    },
    {
      name: "Shivang Saxena",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE2/view?usp=sharing"
    },
    {
      name: "Pavitra Arora",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE3/view?usp=sharing"
    },
    {
      name: "Thippireddy Mohan Reddy",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE4/view?usp=sharing"
    },
    {
      name: "Arihant Sinha",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Vanshit tyagi",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Shweta Singh",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Prashasti",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Aniket mishra",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "kshitij",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Nitin Chaudhary",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Shaifali Chaudhary",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Mukund Aggarwal",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Deepak Kumar",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Shivansh Dutt Tripathi ",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Shweta Mishra",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Nitin Shukla",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "smriti singh",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    ,
    {
      name: "Niharika Singh",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Afreen Hashmi",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Prateek mishra",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Kartik Sharma",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "shivanjali ojha",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Sajal Sharma",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Sakshi Dwivedi",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Navya Gupta",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Firdaus Fatima",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Saksham Negi",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Ragini Yadav",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Khushi Gupta",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    },
    {
      name: "Harshita Tiwari",
      college: "n/a",
      certificateId: "n/a",
      driveLink: "https://drive.google.com/file/d/1EXAMPLE5/view?usp=sharing"
    }
  ];

  // Function to convert Google Drive view link to preview link
  const getPreviewLink = (driveLink) => {
    const fileId = driveLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId[1]}/preview`;
    }
    return driveLink;
  };

  // Function to convert Google Drive view link to download link
  const getDownloadLink = (driveLink) => {
    const fileId = driveLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileId) {
      return `https://drive.google.com/uc?export=download&id=${fileId[1]}`;
    }
    return driveLink;
  };

  // Function to handle row click for preview
  const handleRowClick = (driveLink) => {
    const previewLink = getPreviewLink(driveLink);
    window.open(previewLink, '_blank');
  };

  // Function to handle download button click
  const handleDownload = (e, driveLink) => {
    e.stopPropagation(); // Prevent row click
    const downloadLink = getDownloadLink(driveLink);
    const link = document.createElement('a');
    link.href = downloadLink;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col" style={{
      backgroundImage: "url('./assets/Background2.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center"
    }}>
      {/* Header */}
      <div className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6 rounded"></div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-blue-400 mb-2 tracking-tight">
              Campus Ambassador Certificates
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-4">
              Congratulations to all our Campus Ambassadors!
            </p>
            <p className="text-blue-200 text-base">
              Download links will be available soon.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-5xl mx-auto px-2 md:px-6 pb-12">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="bg-gray-800 rounded-2xl shadow-xl p-4 md:p-8 overflow-x-auto"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-3 px-2 text-blue-300 font-semibold text-base md:text-lg">Name</th>
                <th className="py-3 px-2 text-blue-300 font-semibold text-base md:text-lg">College</th>
                <th className="py-3 px-2 text-blue-300 font-semibold text-base md:text-lg">Certificate ID</th>
                <th className="py-3 px-2 text-blue-300 font-semibold text-base md:text-lg text-center">Download</th>
              </tr>
            </thead>
            <tbody>
              {ambassadors.map((ambassador, index) => (
                <motion.tr
                  key={ambassador.name + index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ backgroundColor: "rgba(59,130,246,0.08)" }} // Tailwind blue-500/10
                  className="border-b border-gray-700 cursor-pointer transition-colors duration-200"
                  onClick={() => handleRowClick(ambassador.driveLink)}
                >
                  <td className="py-3 px-2 text-white">{ambassador.name}</td>
                  <td className="py-3 px-2 text-gray-200">{ambassador.college}</td>
                  <td className="py-3 px-2 text-gray-400 font-mono">{ambassador.certificateId}</td>
                  <td className="py-3 px-2 text-center">
                    {/* <button
                      onClick={e => handleDownload(e, ambassador.driveLink)}
                      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200 flex items-center justify-center mx-auto"
                    >
                      <Download size={18} />
                    </button> */}
                    <span className="text-blue-400 font-semibold">Releasing Soon</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} E-Cell MNNIT. All rights reserved.
      </footer>
    </div>
  );
};

export default CampusAmbassadorPage;
