// List of participants
const participants = {
  volunteer: [
    "Divyansh Singh Bisht", "Aditya Pratap Singh", "Kartik Joshi", "Nandini Raj", "Sheetal Rana",
    "Kushagra Tyagi", "Harshpreet Kaur", "Jahanvi Sharma", "Niharika Negi", "Aryan Rajput",
    "Harsh Vardhan Singh Rathore", "Arbish Mirza", "Ankit Rawat", "Sujal Tyagi", "Abhinav Sharma",
    "Tarun Chauhan", "Pratham Chawla", "Harshit Bhatnagar", "Shivam Bhandari", "Gaurav Kumar",
    "Manav Chaturvedi", "Ayush Singh", "Shubham Raj", "Shivam Maletha", "Mohammad Sahil",
    "Harshit Bisht", "Amay Bist", "Himanshu Mawdi", "Shardul Raturi", "Ankita Shailly",
    "Amisha Panwar", "Kumari Ritu", "Jay Jee Pragya", "Sherya Ojha", "Divya Adhikari",
    "Hemang Rana", "Devashish Singh", "Ananya Gilotra", "Anant Gupta", "Aastha Rawat",
    "Suhani Gupta", "Soumya Chauhan", "Ashi Kamboj", "Tanya Bobal" , " Siddhant Kala"
  ],
  organizer: [
    "Rahul Bijalwan", "Sneha Payal", "Bobby Singh", "Shrishti Chauhan", "Palak Verma",
    "Kritharth Devli", "Ayush Rawat", "Yatharth Tyagi","Ankitta Shailly"
  ]
};

function checkAndDownload() {
  let fullName = document.getElementById("fullName").value.trim();
  const role = document.getElementById("role").value;

  // Capitalize the first letter of each word in the name
  fullName = fullName.split(' ')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                      .join(' ');

  const formattedName = fullName.replace(/ /g, "_");

  if (participants[role] && participants[role].includes(fullName)) {
      downloadCertificate(role, formattedName);
  } else {
      alert("You are not in the volunteer or organizer list.");
  }
}

function downloadCertificate(role, formattedName) {
  const extensions = ['pdf', 'jpg', 'jpeg', 'png'];
  let found = false;
  
  for (const ext of extensions) {
      const fileName = `${role}_${formattedName}.${ext}`;
      const filePath = `assets/${fileName}`;
      
      // Check if the file exists
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', filePath, false);
      xhr.send();
      
      if (xhr.status === 200) {
          const link = document.createElement("a");
          link.href = filePath;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          found = true;
          break;
      }
  }

  if (!found) {
      alert("Certificate file not found, check if input.");
  }
}
