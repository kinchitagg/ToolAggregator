CREATE TABLE applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    application_name VARCHAR(255),
    application_type VARCHAR(255),
    application_code VARCHAR(50),
    release_status VARCHAR(50),
    team VARCHAR(255),
    product_name VARCHAR(255),
    business_criticality VARCHAR(50),
    application_manager VARCHAR(255),
    delegates VARCHAR(255)
);

INSERT INTO applications (application_name, application_type, application_code, release_status, team, product_name, business_criticality, application_manager, delegates) VALUES
('Salesforce', 'Web', 'SF01', 'Released', 'Sales Team', 'CRM Solution', 'High', 'John Doe', ''),
('Slack', 'Web', 'SL01', 'In Progress', 'Dev Team', 'Communication Tool', 'Medium', 'Jane Smith', ''),
('Zoom', 'Web/Mobile', 'ZM01', 'Released', 'Marketing', 'Video Conferencing', 'High', 'Emma Lee', ''),
('Microsoft Office', 'Desktop', 'MO01', 'Released', 'Office Team', 'Productivity Suite', 'High', 'Alex Johnson', ''),
('Dropbox', 'Cloud', 'DBX01', 'Released', 'IT Team', 'File Storage', 'Medium', 'Sarah Kim', '');
