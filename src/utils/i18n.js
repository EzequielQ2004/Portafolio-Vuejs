import { ref } from 'vue'

const locale = ref(localStorage.getItem('locale') || 'es')

const translations = {
  es: {
    nav: {
      brand: 'Ezequiel Quiroz',
      inicio: 'Inicio',
      educacion: 'Educación',
      proyectos: 'Proyectos',
      habilidades: 'Habilidades',
      contacto: 'Contacto',
      whatsapp: 'WhatsApp',
      github: 'GitHub',
      whatsappTitle: 'Contactar por WhatsApp',
      githubTitle: 'Ver mi GitHub'
    },
    loading: {
      brand: 'Ezequiel Quiroz'
    },
    hero: {
      title: 'Ezequiel Quiroz',
      subtitle: 'Desarrollador Web & Técnico en Programación',
      description: 'Técnico Universitario en Programación - UTN',
      residence: '📍 San Rafael, Mendoza, Argentina',
      intro: '¡Hola! Bienvenido a mi portafolio. Soy un apasionado del desarrollo web y móvil, siempre en busca de mejorar mis habilidades y colaborar en proyectos innovadores.',
      phone: '+54 2604-005223',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'Currículum'
    },
    education: {
      title: 'Educación',
      subtitle: 'Mi formación académica y trayectoria de aprendizaje',
      keyPoints: 'Puntos Clave:',
      visitInstitution: 'Visitar Institución',
      ctaText: '¿Interesado en mi formación o experiencia académica?',
      ctaLinkedin: 'Conectar en LinkedIn',
      ctaCv: 'Ver Currículum Completo',
      items: [
        {
          fecha: '2024 - 2025',
          title: 'Técnicatura Universitaria en Programación',
          institucion: 'UTN San Rafael',
          descripcion: 'Formación especializada en desarrollo y análisis de sistemas informáticos, programación avanzada, bases de datos, y operación de computadoras. Enfoque práctico en tecnologías modernas.',
          estado: 'En curso',
          activo: true,
          destacado: ['Capacitación técnica especializada', 'Proyectos prácticos en equipo', 'Metodologías de desarrollo']
        },
        {
          fecha: '2018 - 2023',
          title: 'Técnicatura Agropecuaria',
          institucion: 'Antonio Di Benedetto 4-043',
          descripcion: 'Formación técnica especializada en producción agropecuaria con énfasis en frutales y hortalizas. Desarrollo de habilidades técnicas, de gestión y resolución de problemas.',
          estado: 'Completado',
          activo: false,
          destacado: ['Formación técnica integral', 'Trabajo en entornos productivos', 'Desarrollo de proyectos prácticos']
        }
      ]
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Trabajos y desarrollos que reflejan mis habilidades',
      filterAll: 'Todos',
      filterPersonal: 'Personal',
      filterGrupal: 'Grupal',
      viewProject: 'Ver Proyecto',
      viewCode: 'Código Fuente',
      statProjects: 'Proyectos Completados',
      statTechs: 'Tecnologías',
      statGithub: 'En GitHub',
      ctaText: '¿Interesado en ver más proyectos o colaborar?',
      ctaButton: 'Explorar Mi GitHub',
      items: [
        {
          titulo: 'CapyGaming',
          subtitulo: 'E-commerce Gamer',
          descripcion: 'Plataforma de comercio electrónico especializada en productos gamers. Desarrollado colaborativamente aplicando metodologías ágiles y control de versiones.',
          anio: '2025',
          tecnologias: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Vue', 'Node', 'Express', 'PostgreSQL', 'Metodologías Ágiles']
        },
        {
          titulo: 'Ferretería San Francisco Web',
          subtitulo: 'Sitio web para ferretería San Francisco',
          descripcion: 'Sitio web para ferretería San Francisco, con información sobre productos y servicios.',
          anio: '2025-2026',
          tecnologias: ['HTML', 'CSS', 'JavaScript', 'Vercel', 'Docker', 'GitHub', 'React', 'Vite', 'Tailwind CSS']
        },
        {
          titulo: 'Juego del Impostor',
          subtitulo: 'Juego del impostor para jugar en el navegador',
          descripcion: 'El juego permite agregar jugadores, elegir categorías de palabras y el número de impostores por partida. ¡Prepárate para descubrir quién es el impostor y ganar el juego!',
          anio: '2026',
          tecnologias: ['JavaScript', 'HTML', 'CSS', 'GitHub Pages']
        },
        {
          titulo: 'Adivina la Bandera',
          subtitulo: 'Juego simple para entretener y aprender banderas',
          descripcion: 'El juego permite elegir entre 3 niveles de dificultad, cada uno con un número diferente de banderas a adivinar. ¡Pon a prueba tus conocimientos geográficos!',
          anio: '2026',
          tecnologias: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages']
        },
        {
          titulo: 'Adivina el Animal con Emojis',
          subtitulo: 'Juego interactivo para adivinar animales usando emojis',
          descripcion: 'Un juego interactivo y educativo donde debes adivinar animales basándote en pistas visuales representadas por emojis.',
          anio: '2026',
          tecnologias: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages']
        },
        {
          titulo: 'Calculadora de Aguinaldo Simple',
          subtitulo: 'Calculadora simple para calcular el aguinaldo de empleados',
          descripcion: 'Una calculadora simple para calcular el aguinaldo de empleados según su salario y antigüedad. Ideal para uso en entornos laborales.',
          anio: '2025',
          tecnologias: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages']
        }
      ]
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Conocimientos técnicos y herramientas que domino',
      filterAll: 'Todos',
      filterFrontend: 'Frontend',
      filterBackend: 'Backend',
      filterTools: 'Herramientas',
      filterLanguages: 'Idiomas',
      level: 'Nivel',
      experience: 'Experiencia:',
      masteryLevel: 'Nivel de Dominio:',
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado',
      expert: 'Experto',
      close: 'Cerrar',
      statSkills: 'Habilidades',
      statCategories: 'Categorías',
      statAverage: 'Promedio',
      categories: [
        {
          nombre: 'Lenguajes de Programación',
          icono: '💻',
          habilidades: [
            { nombre: 'JavaScript', nivel: 70, experiencia: 'Desarrollo web, proyectos universitarios' },
            { nombre: 'Python', nivel: 40, experiencia: 'Lógica de programación, scripts básicos' },
            { nombre: 'HTML/CSS', nivel: 80, experiencia: 'Maquetación web, diseño responsive' },
            { nombre: 'Java', nivel: 65, experiencia: 'Proyectos universitarios, programación OOP' },
            { nombre: 'SQL', nivel: 60, experiencia: 'Consultas, diseño de bases de datos' }
          ]
        },
        {
          nombre: 'Frameworks y Librerías',
          icono: '⚙️',
          habilidades: [
            { nombre: 'React.js', nivel: 65, experiencia: 'Componentes, hooks, estado' },
            { nombre: 'Vue.js', nivel: 75, experiencia: 'Composition API, componentes, este portafolio' },
            { nombre: 'Node.js', nivel: 55, experiencia: 'Backend básico, APIs REST' }
          ]
        },
        {
          nombre: 'Herramientas y Software',
          icono: '🛠️',
          habilidades: [
            { nombre: 'Git', nivel: 75, experiencia: 'Control de versiones, trabajo colaborativo' },
            { nombre: 'Docker', nivel: 30, experiencia: 'Conceptos básicos, contenedores' },
            { nombre: 'Figma', nivel: 40, experiencia: 'Prototipado básico, diseño UI' },
            { nombre: 'Visual Studio Code', nivel: 85, experiencia: 'Editor principal, extensions' }
          ]
        },
        {
          nombre: 'Bases de Datos',
          icono: '🗄️',
          habilidades: [
            { nombre: 'MongoDB', nivel: 45, experiencia: 'NoSQL, documentos JSON' },
            { nombre: 'MySQL', nivel: 65, experiencia: 'Proyectos universitarios, relaciones' },
            { nombre: 'PostgreSQL', nivel: 70, experiencia: 'Consultas avanzadas, transacciones' }
          ]
        },
        {
          nombre: 'Idiomas',
          icono: '🌍',
          habilidades: [
            { nombre: 'Español', nivel: 100, experiencia: 'Lengua materna' },
            { nombre: 'Inglés', nivel: 30, experiencia: 'Lectura técnica básica' }
          ]
        }
      ]
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades y colaboraciones.',
      email: 'Email',
      phone: 'Teléfono',
      location: 'Ubicación',
      locationValue: 'San Rafael, Mendoza, Argentina',
      socialTitle: 'Redes Sociales',
      formName: 'Nombre *',
      formNamePlaceholder: 'Tu nombre completo',
      formEmail: 'Email *',
      formEmailPlaceholder: 'tu@email.com',
      formSubject: 'Asunto *',
      formSubjectPlaceholder: '¿Sobre qué quieres hablar?',
      formMessage: 'Mensaje *',
      formMessagePlaceholder: 'Cuéntame sobre tu proyecto...',
      submit: 'Enviar Mensaje',
      submitting: 'Enviando...',
      reset: 'Limpiar',
      successTitle: '¡Mensaje enviado!',
      successText: 'Te responderé lo antes posible. Gracias por contactarme.',
      errorName: 'El nombre es requerido',
      errorNameLength: 'El nombre debe tener al menos 2 caracteres',
      errorEmail: 'El email es requerido',
      errorEmailInvalid: 'El email no es válido',
      errorSubject: 'El asunto es requerido',
      errorSubjectLength: 'El asunto debe tener al menos 3 caracteres',
      errorMessage: 'El mensaje es requerido',
      errorMessageLength: 'El mensaje debe tener al menos 10 caracteres'
    },
    footer: {
      brand: 'Ezequiel Quiroz',
      tagline: 'Desarrollador Web & Técnico en Programación',
      location: '📍 San Rafael, Mendoza, Argentina',
      navTitle: 'Navegación',
      contactTitle: 'Contacto',
      email: 'Email',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portafolio',
      ctaTitle: '¿Interesado en colaborar?',
      ctaText: 'No dudes en contactarme para proyectos o oportunidades.',
      ctaButton: 'Enviar Mensaje',
      copyright: '© 2024 Ezequiel Quiroz. Todos los derechos reservados.'
    },
    chatbot: {
      initialMessage: '¡Hola! Soy el asistente de Ezequiel. ¿En qué puedo ayudarte hoy?',
      sections: 'Ver secciones del portafolio',
      about: 'Conocer a Ezequiel',
      projects: 'Ver proyectos',
      skills: 'Ver habilidades',
      contact: 'Contacto',
      menu: 'Menú principal',
      back: 'Volver al menú',
      headerTitle: 'Asistente de Ezequiel',
      headerStatus: 'En línea · Listo para ayudar',
      inputPlaceholder: 'Escribe tu pregunta aquí...',
      inputHint: 'Presiona Enter para enviar · Shift+Enter para nueva línea',
      quickSections: 'Secciones',
      quickContact: 'Contacto',
      quickProjects: 'Proyectos',
      quickMenu: 'Menú',
      sectionsText: 'El portafolio tiene estas secciones:',
      aboutText: 'Ezequiel es un desarrollador web en formación apasionado por la tecnología. Tiene formación técnica en agropecuaria y actualmente estudia programación en la UTN. Es proactivo, con rápido aprendizaje y excelente trabajo en equipo.',
      contactText: '¿Cómo prefieres contactarme?',
      contactInfoText: '📋 Mi información de contacto:\n\n• 📧 Email: quirozarielezequiel@gmail.com\n• 📱 WhatsApp: +54 2604-005223\n• 💼 LinkedIn: linkedin.com/in/ezequielquiroz\n• 💻 GitHub: github.com/EzequielQ2004\n• 🌐 Portafolio: ezequielquiroz-portafolio.netlify.app',
      projectsText: 'Proyectos destacados:\n\n• CapyGaming - E-commerce de productos gamers (HTML/CSS/JS/Vue/Node)\n• Ferretería San Francisco Web - Sitio para ferretería con React\n• Juego del Impostor - Juego interactivo con JavaScript',
      skillsText: 'Habilidades técnicas: JavaScript, Vue.js, React, HTML/CSS, Java, Python, Git, MySQL. Habilidades personales: Aprendizaje rápido, trabajo en equipo, adaptabilidad, resolución de problemas.',
      educationText: 'Educación:\n• UTN San Rafael - Tecnicatura en Programación (2024-2025)\n• Escuela Agropecuaria Antonio Di Benedetto - Técnico Agropecuario (2018-2023)',
      scrollToSection: 'Perfecto, te llevo a la sección de',
      educationDetail: '📚 Educación detallada:\n\nUTN San Rafael (2024-2025):\n• Algoritmos y estructuras de datos\n• Programación orientada a objetos\n• Bases de datos y SQL\n• Desarrollo web frontend/backend\n\nEscuela Técnica (2018-2023):\n• Desarrollo de habilidades analíticas\n• Trabajo en equipo en proyectos prácticos\n• Gestión y resolución de problemas',
      projectDetail: '🚀 Proyectos detallados:\n\n1. CapyGaming:\n   - E-commerce para productos gamers\n   - Frontend: HTML, CSS, JavaScript, Vue\n   - Trabajo en equipo universitario\n\n2. Ferretería San Francisco Web:\n   - Sitio web para ferretería\n   - Tecnologías: React, Tailwind, Docker\n   - Desarrollo en equipo\n\n3. Portafolio Web:\n   - Sitio personal desarrollado en Vue.js\n   - Diseño moderno y responsive\n   - Implementación de chatbot',
      skillDetail: '⚡ Habilidades detalladas:\n\nFrontend:\n• JavaScript (Intermedio)\n• Vue.js (Intermedio-Avanzado)\n• HTML5/CSS3 (Avanzado)\n• React (Básico-Intermedio)\n\nBackend:\n• Java (Intermedio)\n• Python (Básico)\n• Node.js (Básico)\n\nBases de Datos:\n• MySQL (Intermedio)\n• PostgreSQL (Básico)\n• MongoDB (Básico)\n\nHerramientas:\n• Git/GitHub (Intermedio)\n• VS Code (Avanzado)',
      details: 'Más sobre',
      hereWeAre: 'Aquí estamos en',
      whatsapp: '📱 Hablar por WhatsApp',
      formContact: '📧 Usar formulario de contacto',
      contactInfo: '📋 Ver información de contacto',
      openGithub: 'Abriendo GitHub en una nueva pestaña...',
      openLinkedin: 'Abriendo LinkedIn en una nueva pestaña...',
      openWhatsapp: 'Abriendo WhatsApp en una nueva pestaña...',
      copiedEmail: '✅ ¡Email copiado al portapapeles!',
      unknownOption: 'Disculpa, esa opción no está disponible. ¿Prefieres elegir del menú principal?',
      greeting: '¡Hola! Me alegra saludarte. ¿En qué puedo ayudarte hoy?',
      unknownInput: 'Interesante pregunta. ¿Podrías ser más específico o prefieres elegir una de estas opciones?'
    },
    scrollTop: 'Volver arriba'
  },
  en: {
    nav: {
      brand: 'Ezequiel Quiroz',
      inicio: 'Home',
      educacion: 'Education',
      proyectos: 'Projects',
      habilidades: 'Skills',
      contacto: 'Contact',
      whatsapp: 'WhatsApp',
      github: 'GitHub',
      whatsappTitle: 'Contact via WhatsApp',
      githubTitle: 'View my GitHub'
    },
    loading: {
      brand: 'Ezequiel Quiroz'
    },
    hero: {
      title: 'Ezequiel Quiroz',
      subtitle: 'Web Developer & Programming Technician',
      description: 'University Programming Technician - UTN',
      residence: '📍 San Rafael, Mendoza, Argentina',
      intro: 'Hello! Welcome to my portfolio. I am passionate about web and mobile development, always looking to improve my skills and collaborate on innovative projects.',
      phone: '+54 2604-005223',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'Resume'
    },
    education: {
      title: 'Education',
      subtitle: 'My academic background and learning journey',
      keyPoints: 'Key Points:',
      visitInstitution: 'Visit Institution',
      ctaText: 'Interested in my academic background?',
      ctaLinkedin: 'Connect on LinkedIn',
      ctaCv: 'View Full Resume',
      items: [
        {
          fecha: '2024 - 2025',
          title: 'University Degree in Programming',
          institucion: 'UTN San Rafael',
          descripcion: 'Specialized training in software development and analysis, advanced programming, databases, and computer operations. Practical focus on modern technologies.',
          estado: 'In progress',
          activo: true,
          destacado: ['Specialized technical training', 'Hands-on team projects', 'Development methodologies']
        },
        {
          fecha: '2018 - 2023',
          title: 'Agricultural Technician Degree',
          institucion: 'Antonio Di Benedetto 4-043',
          descripcion: 'Specialized technical training in agricultural production with emphasis on fruits and vegetables. Development of technical, management and problem-solving skills.',
          estado: 'Completed',
          activo: false,
          destacado: ['Comprehensive technical education', 'Work in production environments', 'Practical project development']
        }
      ]
    },
    projects: {
      title: 'Projects',
      subtitle: 'Works and developments that reflect my skills',
      filterAll: 'All',
      filterPersonal: 'Personal',
      filterGrupal: 'Team',
      viewProject: 'View Project',
      viewCode: 'Source Code',
      statProjects: 'Completed Projects',
      statTechs: 'Technologies',
      statGithub: 'On GitHub',
      ctaText: 'Interested in seeing more projects or collaborating?',
      ctaButton: 'Explore My GitHub',
      items: [
        {
          titulo: 'CapyGaming',
          subtitulo: 'Gamer E-commerce',
          descripcion: 'E-commerce platform specialized in gaming products. Collaboratively developed using agile methodologies and version control.',
          anio: '2025',
          tecnologias: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Vue', 'Node', 'Express', 'PostgreSQL', 'Agile Methodologies']
        },
        {
          titulo: 'Ferretería San Francisco Web',
          subtitulo: 'Hardware store website',
          descripcion: 'Website for Ferretería San Francisco, with information about products and services.',
          anio: '2025-2026',
          tecnologias: ['HTML', 'CSS', 'JavaScript', 'Vercel', 'Docker', 'GitHub', 'React', 'Vite', 'Tailwind CSS']
        },
        {
          titulo: 'Impostor Game',
          subtitulo: 'Party game to play in the browser',
          descripcion: 'The game lets you add players, choose word categories and the number of impostors per round. Get ready to find out who the impostor is and win the game!',
          anio: '2026',
          tecnologias: ['JavaScript', 'HTML', 'CSS', 'GitHub Pages']
        },
        {
          titulo: 'Guess the Flag',
          subtitulo: 'Simple game to learn flags in your browser',
          descripcion: 'Choose from 3 difficulty levels, each with a different number of flags to guess. Test your geography knowledge and have fun!',
          anio: '2026',
          tecnologias: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages']
        },
        {
          titulo: 'Guess the Animal with Emojis',
          subtitulo: 'Interactive game to guess animals using emojis',
          descripcion: 'An interactive and educational game where you guess animals based on visual clues represented by emojis.',
          anio: '2026',
          tecnologias: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages']
        },
        {
          titulo: 'Simple Bonus Calculator',
          subtitulo: 'Simple calculator for employee年终奖',
          descripcion: 'A simple calculator to calculate employee year-end bonus based on salary and seniority. Ideal for workplace use.',
          anio: '2025',
          tecnologias: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages']
        }
      ]
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technical knowledge and tools I master',
      filterAll: 'All',
      filterFrontend: 'Frontend',
      filterBackend: 'Backend',
      filterTools: 'Tools',
      filterLanguages: 'Languages',
      level: 'Level',
      experience: 'Experience:',
      masteryLevel: 'Mastery Level:',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      expert: 'Expert',
      close: 'Close',
      statSkills: 'Skills',
      statCategories: 'Categories',
      statAverage: 'Average',
      categories: [
        {
          nombre: 'Programming Languages',
          icono: '💻',
          habilidades: [
            { nombre: 'JavaScript', nivel: 70, experiencia: 'Web development, university projects' },
            { nombre: 'Python', nivel: 40, experiencia: 'Programming logic, basic scripts' },
            { nombre: 'HTML/CSS', nivel: 80, experiencia: 'Web layout, responsive design' },
            { nombre: 'Java', nivel: 65, experiencia: 'University projects, OOP programming' },
            { nombre: 'SQL', nivel: 60, experiencia: 'Queries, database design' }
          ]
        },
        {
          nombre: 'Frameworks & Libraries',
          icono: '⚙️',
          habilidades: [
            { nombre: 'React.js', nivel: 65, experiencia: 'Components, hooks, state' },
            { nombre: 'Vue.js', nivel: 75, experiencia: 'Composition API, components, this portfolio' },
            { nombre: 'Node.js', nivel: 55, experiencia: 'Basic backend, REST APIs' }
          ]
        },
        {
          nombre: 'Tools & Software',
          icono: '🛠️',
          habilidades: [
            { nombre: 'Git', nivel: 75, experiencia: 'Version control, collaborative work' },
            { nombre: 'Docker', nivel: 30, experiencia: 'Basic concepts, containers' },
            { nombre: 'Figma', nivel: 40, experiencia: 'Basic prototyping, UI design' },
            { nombre: 'Visual Studio Code', nivel: 85, experiencia: 'Main editor, extensions' }
          ]
        },
        {
          nombre: 'Databases',
          icono: '🗄️',
          habilidades: [
            { nombre: 'MongoDB', nivel: 45, experiencia: 'NoSQL, JSON documents' },
            { nombre: 'MySQL', nivel: 65, experiencia: 'University projects, relationships' },
            { nombre: 'PostgreSQL', nivel: 70, experiencia: 'Advanced queries, transactions' }
          ]
        },
        {
          nombre: 'Languages',
          icono: '🌍',
          habilidades: [
            { nombre: 'Spanish', nivel: 100, experiencia: 'Native language' },
            { nombre: 'English', nivel: 30, experiencia: 'Basic technical reading' }
          ]
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Got a project in mind? Let\'s talk! I\'m available for new opportunities and collaborations.',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'San Rafael, Mendoza, Argentina',
      socialTitle: 'Social Media',
      formName: 'Name *',
      formNamePlaceholder: 'Your full name',
      formEmail: 'Email *',
      formEmailPlaceholder: 'your@email.com',
      formSubject: 'Subject *',
      formSubjectPlaceholder: 'What would you like to talk about?',
      formMessage: 'Message *',
      formMessagePlaceholder: 'Tell me about your project...',
      submit: 'Send Message',
      submitting: 'Sending...',
      reset: 'Clear',
      successTitle: 'Message sent!',
      successText: 'I will get back to you as soon as possible. Thank you for contacting me.',
      errorName: 'Name is required',
      errorNameLength: 'Name must be at least 2 characters',
      errorEmail: 'Email is required',
      errorEmailInvalid: 'Email is not valid',
      errorSubject: 'Subject is required',
      errorSubjectLength: 'Subject must be at least 3 characters',
      errorMessage: 'Message is required',
      errorMessageLength: 'Message must be at least 10 characters'
    },
    footer: {
      brand: 'Ezequiel Quiroz',
      tagline: 'Web Developer & Programming Technician',
      location: '📍 San Rafael, Mendoza, Argentina',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      email: 'Email',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portfolio',
      ctaTitle: 'Interested in collaborating?',
      ctaText: 'Feel free to contact me for projects or opportunities.',
      ctaButton: 'Send Message',
      copyright: '© 2024 Ezequiel Quiroz. All rights reserved.'
    },
    chatbot: {
      initialMessage: 'Hi! I am Ezequiel\'s assistant. How can I help you today?',
      sections: 'View portfolio sections',
      about: 'About Ezequiel',
      projects: 'View projects',
      skills: 'View skills',
      contact: 'Contact',
      menu: 'Main menu',
      back: 'Back to menu',
      headerTitle: 'Ezequiel\'s Assistant',
      headerStatus: 'Online · Ready to help',
      inputPlaceholder: 'Type your question here...',
      inputHint: 'Press Enter to send · Shift+Enter for new line',
      quickSections: 'Sections',
      quickContact: 'Contact',
      quickProjects: 'Projects',
      quickMenu: 'Menu',
      sectionsText: 'The portfolio has these sections:',
      aboutText: 'Ezequiel is a web developer in training passionate about technology. He has technical training in agriculture and is currently studying programming at UTN. He is proactive, a fast learner, and excellent at teamwork.',
      contactText: 'How would you like to contact me?',
      contactInfoText: '📋 My contact information:\n\n• 📧 Email: quirozarielezequiel@gmail.com\n• 📱 WhatsApp: +54 2604-005223\n• 💼 LinkedIn: linkedin.com/in/ezequielquiroz\n• 💻 GitHub: github.com/EzequielQ2004\n• 🌐 Portfolio: ezequielquiroz-portafolio.netlify.app',
      projectsText: 'Featured projects:\n\n• CapyGaming - Gaming e-commerce (HTML/CSS/JS/Vue/Node)\n• Ferretería San Francisco Web - Hardware store site with React\n• Impostor Game - Interactive game with JavaScript',
      skillsText: 'Technical skills: JavaScript, Vue.js, React, HTML/CSS, Java, Python, Git, MySQL. Soft skills: Fast learning, teamwork, adaptability, problem-solving.',
      educationText: 'Education:\n• UTN San Rafael - Programming Degree (2024-2025)\n• Antonio Di Benedetto Agricultural School - Agricultural Technician (2018-2023)',
      scrollToSection: 'Great, taking you to the',
      educationDetail: '📚 Detailed education:\n\nUTN San Rafael (2024-2025):\n• Algorithms and data structures\n• Object-oriented programming\n• Databases and SQL\n• Frontend/backend web development\n\nTechnical School (2018-2023):\n• Analytical skills development\n• Teamwork on practical projects\n• Management and problem solving',
      projectDetail: '🚀 Detailed projects:\n\n1. CapyGaming:\n   - E-commerce for gaming products\n   - Frontend: HTML, CSS, JavaScript, Vue\n   - University team project\n\n2. Ferretería San Francisco Web:\n   - Hardware store website\n   - Technologies: React, Tailwind, Docker\n   - Team development\n\n3. Web Portfolio:\n   - Personal site built with Vue.js\n   - Modern responsive design\n   - Chatbot implementation',
      skillDetail: '⚡ Detailed skills:\n\nFrontend:\n• JavaScript (Intermediate)\n• Vue.js (Intermediate-Advanced)\n• HTML5/CSS3 (Advanced)\n• React (Basic-Intermediate)\n\nBackend:\n• Java (Intermediate)\n• Python (Basic)\n• Node.js (Basic)\n\nDatabases:\n• MySQL (Intermediate)\n• PostgreSQL (Basic)\n• MongoDB (Basic)\n\nTools:\n• Git/GitHub (Intermediate)\n• VS Code (Advanced)',
      details: 'More about',
      hereWeAre: 'We are now in',
      whatsapp: '📱 Talk via WhatsApp',
      formContact: '📧 Use contact form',
      contactInfo: '📋 View contact info',
      openGithub: 'Opening GitHub in a new tab...',
      openLinkedin: 'Opening LinkedIn in a new tab...',
      openWhatsapp: 'Opening WhatsApp in a new tab...',
      copiedEmail: '✅ Email copied to clipboard!',
      unknownOption: 'Sorry, that option is not available. Would you like to choose from the main menu?',
      greeting: 'Hello! Nice to meet you. How can I help you today?',
      unknownInput: 'Interesting question. Could you be more specific or would you like to choose one of these options?'
    },
    scrollTop: 'Back to top'
  }
}

export function useI18n() {
  function t(key) {
    const keys = key.split('.')
    let result = translations[locale.value]
    for (const k of keys) {
      result = result?.[k]
    }
    return result ?? key
  }

  function setLocale(lang) {
    if (translations[lang]) {
      locale.value = lang
      localStorage.setItem('locale', lang)
    }
  }

  return { t, locale, setLocale }
}

export { translations }
