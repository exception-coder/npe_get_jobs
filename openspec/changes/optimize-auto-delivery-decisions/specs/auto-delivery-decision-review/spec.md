## ADDED Requirements

### Requirement: Confirmed automatic delivery sends the greeting
The system SHALL use the same prepare-then-confirm BOSS workflow for automatic delivery and single-job delivery. Automatic delivery SHALL require a `READY` contact preparation result before confirming contact. When `confirmContact` is true, it SHALL verify the recipient and exact draft, select one enabled send control in the conversation, and execute at most one submission action. Missing controls SHALL fail before submission; Enter MUST NOT be used as a guessed fallback. It MUST NOT switch to a second action because the editor has not cleared promptly. It SHALL report success only after the editor clears and a new delivered or read receipt for the greeting appears. Attachment options MUST NOT downgrade a confirmed greeting to a draft.

#### Scenario: Automatic delivery confirms contact with default attachment options
- **WHEN** automatic delivery submits a greeting with `confirmContact` true and no text-specific attachment option
- **THEN** the greeting is sent rather than left in the editor as a draft

#### Scenario: Contact entry is not ready
- **WHEN** automatic delivery cannot prepare a `READY` contact entry for a job
- **THEN** it records the job as failed and does not invoke contact confirmation

#### Scenario: Platform does not confirm delivery
- **WHEN** the editor remains populated or no new delivered/read receipt appears after the send action
- **THEN** the attempt is reported as failed or uncertain and is not recorded as successfully contacted

#### Scenario: Send control uses semantic button markup
- **WHEN** the current conversation contains one enabled visible button named 发送 without the old `.btn-send` class
- **THEN** the system uses that control exactly once

#### Scenario: Delayed editor clearing after submission
- **WHEN** a submission has been attempted and the editor stays populated while delivery is pending
- **THEN** the system waits for the receipt without invoking any second send action

#### Scenario: Draft or recipient changes before submission
- **WHEN** the actual draft or selected recipient differs from the confirmed input immediately before submission
- **THEN** the system fails before executing a send action

#### Scenario: Send control appears after rendering
- **WHEN** the send control is initially missing or disabled and becomes uniquely available within the bounded readiness wait
- **THEN** the system resolves the current control without pressing a send key or retaining stale button state

#### Scenario: No verified send control exists
- **WHEN** no unique enabled send control can be resolved
- **THEN** the system fails before submission and does not guess an Enter action

### Requirement: Draft filling preserves user content
The system SHALL compare actual editable text after normalizing line endings, non-breaking spaces and editor placeholder characters, without collapsing meaningful internal spaces or paragraphs. It SHALL preserve an existing different draft. It SHALL reuse an identical draft and SHALL NOT press a send key during draft preparation.

#### Scenario: Contenteditable renders formatted lines
- **WHEN** the editor wraps the greeting in blocks or adds an empty trailing line
- **THEN** draft verification succeeds if its meaningful text matches the greeting

#### Scenario: Framework ignores initial fill
- **WHEN** fill leaves the editor empty after a bounded wait
- **THEN** the system may use plain text insertion and verifies the resulting text without submitting it

#### Scenario: Draft text exists but reactive send state is disabled
- **WHEN** the draft text matches but the send control remains disabled
- **THEN** one native-input refresh of the same or empty draft may be attempted, followed by bounded readiness verification; different user content MUST NOT be replaced and no send key may be pressed

### Requirement: Conversation selection verifies identity and bounds discovery
The system SHALL first reuse an already verified active conversation. Otherwise it SHALL use exact recruiter identity and company evidence when available to locate an unambiguous visible contact, then verify company, role and recruiter in the active conversation before preparing a draft. Discovery MAY scroll the contact list a bounded number of times, but SHALL NOT scroll the conversation body or the whole page. Missing or ambiguous identity MUST fail before draft insertion or submission.

#### Scenario: Correct recovery conversation is already active but not in the sidebar
- **WHEN** a draft-only attempt is being recovered and the current conversation proves the target company, role and recruiter
- **THEN** it is reused without clicking a contact or the job contact entry

#### Scenario: Company is not nested within the recruiter name box
- **WHEN** an exact recruiter name uniquely identifies a visible candidate while its company label is elsewhere in the row
- **THEN** the candidate may be opened but company, role and recruiter must all be verified in the conversation before editing

#### Scenario: Contact list is lazy loaded
- **WHEN** the target is not initially rendered and a scrollable ancestor of the contact rows exists
- **THEN** discovery scrolls only that list within a fixed bound and verifies the selected conversation

### Requirement: Attempt journal distinguishes preparation from submission
The system SHALL persist contact-entry, draft, text-submission and image-submission stages before consequential actions and SHALL protect concurrent attempts. It SHALL allow a later user-triggered attempt to resume a verified conversation when the previous attempt is provably draft-only. It MUST NOT repeat the contact-entry click during such recovery. Submitted, successful, ambiguous legacy, or locked attempts SHALL remain blocked until platform verification; elapsed time MUST NOT automatically authorize resending.

#### Scenario: Previous attempt failed draft verification
- **WHEN** the previous journal proves a verified conversation with no text or image submission
- **THEN** a new attempt may resume that conversation without clicking 立即沟通 again

#### Scenario: Legacy journal proves only a draft
- **WHEN** a legacy record explicitly reports draft failure or draft-only success, an established conversation and no delivered text or image
- **THEN** it may be upgraded for conversation-only recovery

#### Scenario: Prior text submission has no receipt
- **WHEN** text submission was recorded but no receipt was confirmed
- **THEN** another attempt is blocked before navigation and no text is resubmitted

#### Scenario: Concurrent attempt is active
- **WHEN** another operation owns the page or the same journal lock
- **THEN** the new attempt is rejected without opening contact or changing the draft

#### Scenario: Native-input refresh fails before submission
- **WHEN** a verified conversation fails draft or button readiness with no text or image submission
- **THEN** the next attempt can recover the conversation without reopening contact

#### Scenario: Legacy record contradicts its draft-only reason
- **WHEN** a legacy record has a draft-only reason but also records a text or image submission attempt
- **THEN** recovery is blocked rather than trusting the reason alone

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
The system SHALL persist automatic-delivery match evidence with its confidence and decision context. It SHALL reuse only a high-confidence explicit mismatch when platform, platform job ID, JD content, job-intent version, user guidance, and matching-policy version are unchanged. Reused outcomes SHALL bypass a new model decision.

#### Scenario: Unchanged job was previously rejected confidently
- **WHEN** the same platform job, JD content, intent version, and decision context has a high-confidence explicit mismatch record
- **THEN** the system skips model evaluation and returns the stored mismatch outcome

#### Scenario: Relevant decision input changed
- **WHEN** the JD content, intent version, user decision guidance, or matching-policy version differs from the stored evidence
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

### Requirement: Missing details do not veto a relevant job
The system SHALL require verified target-position relevance for an apply recommendation. It SHALL reject a job when a non-preference requirement has a verified explicit conflict, including an explicit exclusion. Unknown non-role checks SHALL remain visible but SHALL NOT alone block an apply recommendation. An apply result with unknown checks SHALL have medium confidence. Missing, invalid, or unmatched preference checks MUST NOT act as mandatory requirements. Missing or invalid role evidence SHALL prevent apply and, in the absence of a verified hard conflict, SHALL yield review; complete model failure MUST NOT produce apply.

#### Scenario: Relevant role with missing qualification details
- **WHEN** role relevance has valid evidence and qualification or exclusion information is unknown with no verified hard conflict
- **THEN** the job is recommended for application with medium confidence and its unknown checks remain available for review

#### Scenario: Preferred industry is not verified or differs
- **WHEN** role relevance is verified and a prefer industry check is absent, invalid, unknown, or unmatched
- **THEN** the preference does not veto the application

#### Scenario: Explicit mandatory conflict or excluded role
- **WHEN** verified job evidence proves a mandatory conflict or an excluded role
- **THEN** the system recommends skip regardless of other passing or unknown checks

#### Scenario: No valid role decision
- **WHEN** no unique valid role check is available, including complete model response failure, and no verified hard conflict exists
- **THEN** the system recommends review rather than application

### Requirement: Matching uses structured facts and literal field evidence
The matcher SHALL evaluate supplied title, city, salary and platform facts even when description is absent. Evidence SHALL be checked against actual job-field values or permitted user guidance rather than escaped JSON. It SHALL tolerate formatting whitespace and Unicode presentation differences without accepting rewritten or fabricated facts. Unknown checks SHALL retain useful model explanations.

#### Scenario: Search result lacks detailed JD
- **WHEN** a job has a title and structured salary or industry facts but no description
- **THEN** the matcher evaluates those supplied facts instead of bypassing the model

#### Scenario: Evidence includes line breaks and quotes
- **WHEN** evidence quotes an actual field with only whitespace or Unicode presentation differences
- **THEN** the evidence remains verifiable

#### Scenario: Model invents role evidence
- **WHEN** the role citation cannot be found in the job fields
- **THEN** the role check becomes unknown and blocks application

### Requirement: Comparable salary ranges use overlap
The system SHALL treat comparable monthly salary ranges as compatible when they overlap, including a shared endpoint. It SHALL reject non-overlapping mandatory ranges using job salary evidence. It MUST NOT infer monthly equivalents from annual salaries or guess salary installments. A verified explicit user waiver SHALL retain precedence.

#### Scenario: Advertised salary exceeds intent but overlaps
- **WHEN** the monthly intent is 10–25K and the advertised salary is 20–40K or 25–50K
- **THEN** the salary check is matched instead of rejecting the higher advertised maximum

#### Scenario: Mandatory salary has no overlap
- **WHEN** the monthly intent is 10–25K and the advertised salary is 30–50K
- **THEN** the mandatory salary check is unmatched
