## ADDED Requirements

### Requirement: Confirmed automatic delivery sends the greeting
The system SHALL use the same confirmed BOSS send action for automatic delivery and single-job delivery. When `confirmContact` is true, it SHALL focus the verified editor and trigger BOSS's Enter-to-send action, with the visible send control as a compatibility fallback when Enter does not clear the editor. It SHALL report success only after the editor clears and a new delivered or read receipt appears. Attachment options MUST NOT downgrade a confirmed greeting to a draft.

#### Scenario: Automatic delivery confirms contact with default attachment options
- **WHEN** automatic delivery submits a greeting with `confirmContact` true and no text-specific attachment option
- **THEN** the greeting is sent rather than left in the editor as a draft

#### Scenario: Platform does not confirm delivery
- **WHEN** the editor remains populated or no new delivered/read receipt appears after the send action
- **THEN** the attempt is reported as failed or uncertain and is not recorded as successfully contacted

### Requirement: BOSS search remains city-wide
The system SHALL restrict BOSS searches at city level only. When a user names a district or county, the system SHALL resolve its parent city but MUST NOT send an `areaBusiness` district or business-area filter.

#### Scenario: User requests a county-level place
- **WHEN** the user requests 安溪 as a preferred place
- **THEN** the BOSS search uses the 泉州 city code and leaves district and business-area filters unrestricted

#### Scenario: Search input contains a stale district code
- **WHEN** a BOSS search input contains both a city code and an `areaBusiness` value
- **THEN** the generated search URL omits `areaBusiness`

### Requirement: Uncontacted jobs are eligible regardless of discovery date
The system SHALL select automatic-delivery candidates from uncontacted jobs on the requested platform without requiring the job to have been discovered or refreshed on the current date. The candidate set SHALL remain bounded and SHALL exclude jobs already marked as contacted successfully.

#### Scenario: Older uncontacted job remains eligible
- **WHEN** a job belongs to the requested platform, was discovered before today, and has no successful contact record
- **THEN** the job is included in the frozen automatic-delivery candidate set

#### Scenario: Previously contacted job remains excluded
- **WHEN** a job has already been marked as contacted successfully
- **THEN** the job is excluded from the automatic-delivery candidate set regardless of discovery date

### Requirement: Large result sets remain usable
The system SHALL group automatic-delivery check outcomes by decision class and SHALL initially render no more than 20 entries in each expanded group. The user SHALL be able to reveal subsequent entries in bounded batches.

#### Scenario: Many explicit mismatches are returned
- **WHEN** an automatic-delivery run contains more than 20 explicit mismatch outcomes
- **THEN** the explicit mismatch group shows the first 20 outcomes and provides an action to reveal the next batch

#### Scenario: Different decision classes are returned
- **WHEN** outcomes contain explicit mismatches and outcomes that cannot be decided
- **THEN** the system presents them in separate, independently expandable groups with their own counts

### Requirement: Stable explicit mismatches are reusable
The system SHALL persist automatic-delivery match evidence with its confidence and decision context. It SHALL reuse only a high-confidence explicit mismatch when platform, platform job ID, JD content, job-intent version, and decision context are unchanged. Reused outcomes SHALL bypass a new model decision.

#### Scenario: Unchanged job was previously rejected confidently
- **WHEN** the same platform job, JD content, intent version, and decision context has a high-confidence explicit mismatch record
- **THEN** the system skips model evaluation and returns the stored mismatch outcome

#### Scenario: Relevant decision input changed
- **WHEN** the JD content, intent version, or user decision guidance differs from the stored evidence
- **THEN** the system performs a fresh decision and stores fresh evidence

#### Scenario: Previous result was uncertain
- **WHEN** stored evidence is low-confidence or classified as unable to decide
- **THEN** the system does not reuse it as an explicit mismatch

### Requirement: Outcomes are traceable
Each check outcome SHALL expose its decision class and reason. When the source job has an original JD URL, the outcome SHALL provide a link that opens that JD in a separate browser context. When confidence is available, the outcome SHALL display it.

#### Scenario: User reviews a rejected job
- **WHEN** a rejected outcome contains an original JD URL and confidence
- **THEN** the user can open the original JD and can see the rejection reason and confidence

### Requirement: User can supplement missing-information rules
The system SHALL allow the user to save and submit up to 2000 characters of decision guidance. The matcher SHALL honor explicit user waivers for qualification dimensions such as education and experience, including when the JD states a conflicting requirement. A waiver MUST cite exact guidance evidence and MUST NOT override target-position relevance or an explicitly excluded role.

#### Scenario: JD omits an experience requirement
- **WHEN** the user guidance says explicit years are not required and the JD does not state an experience requirement
- **THEN** the matcher considers that guidance while deciding whether the target role is suitable

#### Scenario: User explicitly waives education and experience
- **WHEN** user guidance says not to consider education or work experience and the JD states education or experience requirements
- **THEN** those qualification dimensions are treated as satisfied using the exact guidance text as evidence

#### Scenario: Role relevance remains mandatory
- **WHEN** a job is unrelated to the target position or is explicitly excluded
- **THEN** user guidance does not turn that job into a match

#### Scenario: User revisits the workspace
- **WHEN** the user previously entered decision guidance in the same browser
- **THEN** the system restores that guidance for subsequent automatic-delivery runs
