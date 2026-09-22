## ADDED Requirements

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
The system SHALL allow the user to save and submit up to 2000 characters of decision guidance. The matcher SHALL use that guidance to interpret missing or unstated conditions, but MUST NOT use it to override an explicit JD conflict or a clearly unrelated role.

#### Scenario: JD omits an experience requirement
- **WHEN** the user guidance says explicit years are not required and the JD does not state an experience requirement
- **THEN** the matcher considers that guidance while deciding whether the target role is suitable

#### Scenario: JD explicitly conflicts with the target
- **WHEN** the JD explicitly states a condition that conflicts with a required target condition
- **THEN** user guidance does not turn that explicit conflict into a match

#### Scenario: User revisits the workspace
- **WHEN** the user previously entered decision guidance in the same browser
- **THEN** the system restores that guidance for subsequent automatic-delivery runs
