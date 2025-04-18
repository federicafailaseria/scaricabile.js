function searchJobs(title, location) {
  // Controlla se i parametri sono validi
  if (!title || !location) {
    return {
      result: [],
      count: 0
    };
  }

  // Converti i parametri di ricerca in minuscolo
  const searchTitle = title.toLowerCase().trim();
  const searchLocation = location.toLowerCase().trim();

  // Filtra i lavori che corrispondono ai criteri
  const filteredJobs = jobs.filter(job => {
    const jobTitle = job.title.toLowerCase();
    const jobLocation = job.location.toLowerCase();

    // Controlla se entrambi i criteri sono soddisfatti
    return jobTitle.includes(searchTitle) && jobLocation.includes(searchLocation);
  });

  // Restituisci i risultati e il conteggio
  return {
    result: filteredJobs,
    count: filteredJobs.length
  };
}

// Event listener per il bottone di ricerca
document.getElementById("searchButton").addEventListener("click", () => {
  const title = document.getElementById("jobTitle").value;
  const location = document.getElementById("jobLocation").value;

  // Chiama la funzione di ricerca
  const results = searchJobs(title, location);

  // Mostra i risultati
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<h2>Results (${results.count})</h2>`;
  if (results.count > 0) {
    const ul = document.createElement("ul");
    results.result.forEach(job => {
      const li = document.createElement("li");
      li.textContent = `${job.title} - ${job.location}`;
      ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);
  } else {
    resultsDiv.innerHTML += "<p>No jobs found.</p>";
  }
});

// Event listener per il bottone "Clear"
document.getElementById("clearButton").addEventListener("click", () => {
  // Svuota i campi di input
  document.getElementById("jobTitle").value = "";
  document.getElementById("jobLocation").value = "";

  // Svuota i risultati
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<h2>Results</h2>";
});

// Array di lavori (immutabile)
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  { title: "Customer Service - Cloud Video Production", location: "NZ, Auckland" },
  { title: "Commissioning Machinery Assistant (CMA)", location: "US, IA, Wever" },
  { title: "Account Executive - Washington DC", location: "US, DC, Washington" },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  { title: "Lead Guest Service Specialist", location: "US, CA, San Francisco" },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  { title: "Customer Service Associate - Part Time", location: "US, AZ, Phoenix" },
  { title: "ASP.net Developer Job opportunity at United States,New Jersey", location: "US, NJ, Jersey City" },
  { title: "Talent Sourcer (6 months fixed-term contract)", location: "GB, LND, London" },
  { title: "Applications Developer, Digital", location: "US, CT, Stamford" },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  { title: "VP of Sales - Vault Dragon", location: "SG, 01, Singapore" },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  { title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only", location: "GB, SOS, Southend-on-Sea" },
  { title: "Visual Designer", location: "US, NY, New York" },
  { title: "Process Controls Engineer - DCS PLC MS Office - PA", location: "US, PA, USA Northeast" },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  { title: "Vice President, Sales and Sponsorship (Businessfriend.com)", location: "US, CA, Carlsbad" },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  { title: "HAAD/DHA Licensed Doctors Opening in UAE", location: "AE, AZ, Abudhabi" },
  { title: "Talent Management Process Manager", location: "US, MO, St. Louis" },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  { title: "Customer Service Technical Specialist", location: "US, MA, Waltham" },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  { title: "English Teacher Abroad", location: "US, NY, Saint Bonaventure" },
];