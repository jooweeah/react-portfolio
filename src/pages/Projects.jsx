import { motion } from 'framer-motion'
import project1Img from '../assets/project1.png'

const projects = [
  {
    id: 1,
    title: 'Recipe Box',
    description: 'A personal recipe manager to save, organize, and rate your favorite recipes. Each account has its own private collection that syncs across devices.',
    demo: 'https://julias-recipe-box.netlify.app/',
    repo: 'https://github.com/jooweeah/Recipe-Box',
    image: project1Img,
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A short description of what this project does.',
    demo: '#',
    repo: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A short description of what this project does.',
    demo: '#',
    repo: '#',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
}

function Projects() {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <h2 className="mb-5 text-center" style={{ color: 'var(--color-primary)' }}>Projects</h2>
        <div className="row g-4 justify-content-center">
          {projects.map((project, i) => (
            <div className="col-12 col-sm-6 col-lg-4" key={project.id}>
              <motion.div
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="h-100 d-flex flex-column rounded-3 overflow-hidden"
                style={{
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div
                    style={{
                      height: '180px',
                      backgroundColor: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-muted)',
                      fontSize: '0.85rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    preview image
                  </div>
                )}

                <div
                  className="d-flex flex-column flex-grow-1 p-4"
                  style={{ backgroundColor: 'var(--color-bg-soft)' }}
                >
                  <h5 className="fw-semibold mb-2">{project.title}</h5>
                  <p
                    className="flex-grow-1 mb-4"
                    style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}
                  >
                    {project.description}
                  </p>
                  <div className="d-flex gap-2">
                    <a
                      href={project.demo}
                      className="btn btn-primary btn-sm flex-grow-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.repo}
                      className="btn btn-outline-primary btn-sm flex-grow-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
