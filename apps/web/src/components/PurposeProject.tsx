import '../PurposeProject.css';

export function PurposeProject() {
    return (
        <div className="purpose-panel">
            <div className="purpose-badge">BRD Simulation Platform</div>
            <h1 className="purpose-title">
                Fleet <span className="purpose-title-accent">Telematics</span>
            </h1>
            <p className="purpose-description">
                A real-time fleet monitoring and simulation platform designed for
                Business Requirements Document (BRD) development. Track vehicle
                positions, analyse thermal signatures, and simulate telematics
                scenarios — all in one unified dashboard.
            </p>

            <ul className="purpose-features">
                <li className="purpose-feature-item">
                    <div>
                        <strong style={{ color: 'black' }}>Live Vehicle Tracking</strong>
                        <p>Monitor GPS positions and route histories in real time.</p>
                    </div>
                </li>
                <li className="purpose-feature-item">
                    <div>
                        <strong style={{ color: 'black' }}>Thermal Map Analysis</strong>
                        <p>Visualise heat-zone data overlaid on interactive maps.</p>
                    </div>
                </li>
                <li className="purpose-feature-item">
                    <div>
                        <strong style={{ color: 'black' }}>Simulation Engine</strong>
                        <p>Run configurable BRD scenarios and replay event logs.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}
