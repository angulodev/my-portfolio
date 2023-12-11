<script>
  let studies = [
    {
      title: "Study 1",
      description: "Description of study 1",
      institution: "Institution 1",
      image: "",
    },
    {
      title: "Study 2",
      description: "Description of study 2",
      institution: "Institution 2",
      image: "",
    },
    {
      title: "Study 3",
      description: "Description of study 3",
      institution: "Institution 3",
      image: "",
    },
  ];

  let certificates = [
    {
      title: "Certificate 1",
      description: "Description of certificate 1",
      institution: "Institution 1",
      image: "",
    },
    {
      title: "Certificate 2",
      description: "Description of certificate 2",
      institution: "Institution 2",
      image: "",
    },
    {
      title: "Certificate 3",
      description: "Description of certificate 3",
      institution: "Institution 3",
      image: "",
    },
  ];
</script>

<main>
  <h1>My Studies</h1>
  <ul>
    {#each studies as study}
      <li>
        <h2>{study.title}</h2>
        <p>{study.description}</p>
        <img src={study.image} alt={study.institution} />
      </li>
    {/each}
  </ul>

  <h1>My Certificates</h1>
  <ul>
    {#each certificates as certificate}
      <li>
        <h2>{certificate.title}</h2>
        <p>{certificate.description}</p>
        <img src={certificate.image} alt={certificate.institution} />
      </li>
    {/each}
  </ul>
</main>
