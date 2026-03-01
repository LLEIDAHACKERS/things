# LleidaHackers Digital Brain

Open-source "digital brain" platform to turn disorganized information (for example, a WhatsApp export) into structured, traceable, and queryable knowledge.

![Technology Stack](./TechnologyStacks.webp)

## Overview

LleidaHackers Digital Brain addresses a real problem: critical information is usually fragmented across chats, voice notes, images, PDFs, and random notes.

The project enables an initial onboarding from that chaos, processes each source with open-source models, and keeps everything organized through metadata and semantic retrieval over a vector database.

## What the system does

- Imports unstructured sources (example: exported WhatsApp chats).
- Processes text, audio, images, and documents with specialized workers.
- Enriches each artifact with metadata (source, date, entities, context).
- Indexes embeddings in PostgreSQL + vector extension for semantic retrieval.
- Answers contextual queries using a local LLM.

## Architecture

### Clients
- Mobile app: Expo + React Native.
- Web app: Next.js + JavaScript.
- Extension client: pure Node.js.

### Backend and orchestration
- REST API for ingestion and retrieval.
- RabbitMQ for asynchronous processing queues.
- Dockerized workers to run modality-specific pipelines.

### Data
- PostgreSQL as primary storage.
- Vector extension (Vector PG) for semantic search.

### AI/ML layer (open source)
- Local LLM with Ollama: `OLLAMA_MODEL=llama3.2:3b`.
- Speech-to-text from Hugging Face: `whisper_small`.
- Vision model from Hugging Face (Microsoft): `florence-2-base`.
- ColBERT embeddings for indexing and retrieval in the vector DB.

## End-to-end flow

1. The user uploads disorganized sources (chat, audio, PDF, image).
2. The API validates and stores raw artifacts.
3. Processing tasks are published to RabbitMQ.
4. Workers process content by modality:
   - Voice transcription (Whisper).
   - Image understanding (Florence-2).
   - Embedding generation (ColBERT).
   - Metadata extraction and normalization.
5. Structured output is stored in PostgreSQL + vector index.
6. The local Ollama LLM answers with context and traceability.

## Metadata strategy

Metadata is the core of the "brain":
- Source type (`whatsapp`, `audio`, `pdf`, `image`).
- Timestamps and conversation/session context.
- Detected entities (people, tasks, projects, places).
- Extraction confidence scores.
- Links across artifacts (message ↔ audio ↔ document).

This preserves chronology, context, and provenance, not just text chunks.

## Runtime and deployment

The platform is designed for Dockerized execution:
- API, RabbitMQ, workers, and data services run in containers.
- LLM runs locally in Ollama for lower latency and better privacy.
- Hugging Face models are integrated in processing pipelines.

## Environment configuration

Two env files are used depending on the scenario:

- `.env.example`: standard local development.
- `.env.docker`: Docker/container execution (`host.docker.internal` networking style).

```bash
# Local development
cp .env.example .env
```

Key variables:

```bash
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=things_db

DATABASE_URL=postgresql+asyncpg://postgres:postgres@localhost:5432/things_db
AMQP_URL=amqp://guest:guest@localhost:5672/

API_BASE_URL=http://localhost:8000
BASE_URL=http://localhost:8000

OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3.2:3b
```

## Quick start

```bash
docker compose up -d
```

Then start API, workers, and clients with the project scripts for your environment.

## Open source and collaboration

This repository is designed to be maintainable and extensible by the community:
- Modular architecture (clients, API, workers, pipelines).
- Stack based on open-source components.
- Ready for incremental contributions.

### Issues

Use GitHub Issues to report bugs, request features, or propose improvements.

- Create one issue per topic.
- Include context, expected behavior, and current behavior.
- Add reproducible steps when reporting bugs.
- Attach logs/screenshots when useful.
- Label issues when possible (`bug`, `enhancement`, `documentation`, `good first issue`, `help wanted`).

### Pull requests

Use pull requests for all code and documentation changes.

- Link the PR to an issue (when applicable).
- Keep PRs focused and small enough to review quickly.
- Include a short technical summary and testing notes.
- Update docs when behavior or configuration changes.
- Ensure CI/tests pass before requesting review.

Recommended files at repo root:
- `LICENSE` (MIT or Apache-2.0).
- `CONTRIBUTING.md`.
- `CODE_OF_CONDUCT.md`.
- `SECURITY.md`.
- `.env.example` and `.env.docker`.

## Roadmap

- Improve WhatsApp importer normalization and multilingual handling.
- Strengthen entity linking across chats, audios, and documents.
- Plugin-based system for new workers/modalities.
- Evaluation suite for retrieval quality and grounding.

## License

An OSI-approved license is recommended (MIT or Apache-2.0).

---

LleidaHackers Digital Brain turns scattered information into actionable digital memory.
