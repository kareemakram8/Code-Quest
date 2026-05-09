# Medicena · Patient Flow Coordination

> **Product Owner Take-Home · Tactful AI**
> Seed-stage B2B SaaS for private hospitals in Egypt

---

## The Problem

Private hospitals in Egypt run patient coordination on **WhatsApp threads, verbal handoffs, and paper lists**. The result:

- Bottlenecks are invisible until they become crises
- Admin staff spend their shift relaying status updates instead of solving problems
- Doctors have no real-time view of their queue
- Patients wait — with no idea how long, or why

---

## The Wedge

Rather than rebuilding hospital infrastructure, Medicena targets **one high-frequency, high-pain problem**: coordinating patient movement inside departments.

The first product is a **mobile-first patient flow coordination layer** that replaces fragmented communication with a single real-time operational system.

**In scope:**
- Live patient queues per department
- Real-time status updates (Waiting → With Doctor → Done)
- Bottleneck visibility and alerts
- Operational broadcast messages to staff

**Explicitly out of scope:**
- EMR / medical records
- Insurance and billing
- Doctor scheduling
- Full hospital ERP

---

## Contents

| Section | Description |
|---|---|
| [1. Discovery & Framing](#1-discovery--framing) | User research, JTBD, wedge selection rationale |
| [2. Solution Outline](#2-solution-outline) | MLP definition, user flow, key screens |
| [3. Prototype](#3-prototype) | Clickable mobile prototype + walkthrough |
| [4. Measurement Plan](#4-measurement-plan) | Success metrics, instrumentation, 4-week thresholds |
| [5. Walkthrough Video](#5-walkthrough-video) | 5-minute recorded submission |

---

## 1. Discovery & Framing

[→ Read the full memo](https://drive.google.com/file/d/10oR_Yz7bIKLjfT_fmaYMHZwyaZV-Q3L8/view?usp=sharing)

**Primary user:** Hospital front-desk staff and patient flow coordinators

**Job to be done:** Coordinate patient movement in real time to reduce delays and operational chaos — without chasing people on WhatsApp

**Core insight:** The problem isn't that hospitals lack software. It's that the software they have wasn't designed for the people doing coordination work. This product is.

**Key risk:** Whether staff will consistently use the system under real operational pressure — especially during high-volume hours. Adoption, not features, is the critical variable.

---

## 2. Solution Outline

### Minimum Lovable Product

The MLP gives hospital staff exactly what they need to coordinate patient flow — nothing more.

```
Login → Select Department → Live Queue Dashboard → Update Status → Broadcast Update
<img width="143" height="668" alt="image" src="https://github.com/user-attachments/assets/baa50fab-200f-4a98-8da4-c27823e34582" />

```

### Key Screens

**1. Login**
Phone number input. No friction, no complex auth — designed for staff who are already mid-shift.

**2. Department Selection**
Quick access to: Cardiology · Orthopedics · ER · General Clinic

**3. Live Queue Dashboard** *(the core screen)*
- Patient list per department with status tags
- Waiting time indicators
- Bottleneck alerts highlighted at a glance

**4. Patient Detail View**
- One-tap status updates
- Optional notes for handoffs

**5. Broadcast Panel**
Push operational messages to all relevant staff — e.g., *"Dr. Hamed delayed 20 minutes, rerouting patients to Room 3."*

---

### Commercial Context

**Buyers:** Hospital directors and operations managers at private hospitals

**What they pay for:**
- Reduced patient waiting time
- Real-time operational visibility
- Lower coordination overhead on admin staff
- Improved patient satisfaction scores


## 3. Prototype

**Live Prototype:** [https://asset-manager--karimakramali17.replit.app/]

### What the prototype demonstrates
- Mobile-first UI with realistic navigation
- Mock patient data and queue simulation
- Clickable flow across all five key screens
- Simulated bottleneck alerts and broadcast functionality

### Built with
- **Replit** — frontend structure and generation
- **ChatGPT** — product framing and UX flow

---

## 4. Measurement Plan

[→ Read the full plan](https://drive.google.com/file/d/1mbMtdBbW6oc0ruwD1osH6czjtFdMmYkv/view?usp=sharing)

The framework evaluates two dimensions:

**Desirability** — do hospital staff actually use it?
**Viability** — does it improve operations enough to justify continued payment?

### Metrics

| Type | Metric | Target (Week 4) |
|---|---|---|
| Input | Daily active coordinators | ≥ 70% of onboarded staff |
| Input | Status updates per shift | ≥ 15 per active coordinator |
| Input | Broadcast messages sent | ≥ 3 per department per day |
| Output | Avg. patient wait time | ↓ 20% vs. baseline |
| Output | Coordinator-reported chaos score | ↓ on weekly 1–5 survey |

### What failure looks like
Staff revert to WhatsApp within 2 weeks, update frequency drops below 5/shift, or coordinators report the system adds work rather than reducing it.

---

## 5. Walkthrough Video

[→ Watch the recording](https://drive.google.com/file/d/1Yt0PlHTRX_Bjf9RanerKed1RVMxGzR4s/view?usp=sharing)

**Covers:**
- Why this wedge over alternatives
- Prototype walkthrough (screen by screen)
- Key tradeoffs and deliberate exclusions
- Measurement strategy and success thresholds
