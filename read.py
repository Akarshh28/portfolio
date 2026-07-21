<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Result Management System</title>
    <style>
        :root {
            /* Color Palette */
            --primary-color: #1e3a8a;
            --primary-dark: #1e1b4b;
            --secondary-color: #3b82f6;
            --accent-color: #10b981;
            --danger-color: #ef4444;
            --warning-color: #f59e0b;
            --text-primary: #1f2937;
            --text-secondary: #6b7280;
            --bg-primary: #f8fafc;
            --bg-secondary: #ffffff;
            --border-color: #e2e8f0;
            --shadow: 0 10px 15px -3px rgba(0, 0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
            --shadow-lg: 0 25px 50px -12px rgba(0,0,0,0.25);
            
            /* Typography */
            --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            --font-size-base: 16px;
            --font-size-sm: 0.875rem;
            --font-size-lg: 1.125rem;
            --font-size-xl: 1.25rem;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-family);
            line-height: 1.6;
            color: var(--text-primary);
            background: linear-gradient(135deg, var(--bg-primary) 0%, #e2e8f0 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Header */
        .header {
            background: var(--bg-secondary);
            border-radius: 16px;
            padding: 2rem;
            box-shadow: var(--shadow);
            margin-bottom: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
            text-align: center;
        }

        .logo-section {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .logo {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: var(--font-size-xl);
            font-weight: bold;
        }

        .header-title {
            color: var(--primary-color);
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: var(--bg-primary);
            padding: 1rem 1.5rem;
            border-radius: 12px;
            border: 1px solid var(--border-color);
        }

        /* Main Content */
        .main-content {
            display: grid;
            gap: 2rem;
        }

        .card {
            background: var(--bg-secondary);
            border-radius: 16px;
            padding: 2rem;
            box-shadow: var(--shadow);
            border: 1px solid var(--border-color);
        }

        /* Search Section */
        .search-section h2 {
            color: var(--primary-color);
            margin-bottom: 1.5rem;
            font-size: var(--font-size-xl);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .form-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .form-group label {
            font-weight: 600;
            color: var(--text-primary);
            font-size: var(--font-size-sm);
        }

        .form-group select,
        .form-group input {
            padding: 0.75rem 1rem;
            border: 2px solid var(--border-color);
            border-radius: 10px;
            font-size: var(--font-size-base);
            transition: all 0.3s ease;
            background: var(--bg-primary);
        }

        .form-group select:focus,
        .form-group input:focus {
            outline: none;
            border-color: var(--secondary-color);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .fetch-btn {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            border: none;
            padding: 1rem 2.5rem;
            border-radius: 12px;
            font-size: var(--font-size-lg);
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            max-width: 300px;
            align-self: center;
        }

        .fetch-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .fetch-btn.loading {
            pointer-events: none;
            opacity: 0.8;
        }

        .spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
            margin-right: 0.5rem;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Results Section */
        .results-section {
            display: none;
        }

        .results-section.show {
            display: block;
            animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .overview-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .overview-card {
            background: linear-gradient(135deg, var(--bg-primary), #f1f5f9);
            padding: 1.5rem;
            border-radius: 12px;
            text-align: center;
            border: 1px solid var(--border-color);
        }

        .overview-card h3 {
            color: var(--text-secondary);
            font-size: var(--font-size-sm);
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .overview-card .value {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }

        .gpa .value { color: var(--accent-color); }
        .credits .value { color: var(--primary-color); }
        .status .value { 
            color: var(--accent-color); 
            text-transform: uppercase;
            font-size: 1.25rem;
            letter-spacing: 1px;
        }

        /* Table */
        .grades-table-container {
            overflow-x: auto;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: var(--bg-secondary);
            min-width: 800px;
        }

        th {
            background: var(--primary-color);
            color: white;
            padding: 1rem;
            text-align: left;
            font-weight: 600;
            font-size: var(--font-size-sm);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        td {
            padding: 1rem;
            border-bottom: 1px solid var(--border-color);
        }

        tr:hover {
            background: var(--bg-primary);
        }

        .status.pass {
            color: var(--accent-color);
            font-weight: 600;
        }

        .status.fail {
            color: var(--danger-color);
            font-weight: 600;
        }

        /* Footer */
        .footer {
            text-align: center;
            padding: 2rem;
            margin-top: 3rem;
        }

        .footer-links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .footer-links a {
            color: var(--secondary-color);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .footer-links a:hover {
            color: var(--primary-color);
        }

        .print-btn {
            background: var(--accent-color);
            color: white;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .print-btn:hover {
            background: #059669;
            transform: translateY(-1px);
        }

        .copyright {
            color: var(--text-secondary);
            font-size: var(--font-size-sm);
            margin-top: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            body {
                padding: 10px;
            }

            .header {
                padding: 1.5rem;
            }

            .header-title {
                font-size: 1.5rem;
            }

            .form-grid {
                grid-template-columns: 1fr;
            }

            .overview-grid {
                grid-template-columns: 1fr;
            }

            .user-profile {
                flex-direction: column;
                text-align: center;
                gap: 0.5rem;
            }

            th, td {
                padding: 0.75rem 0.5rem;
                font-size: 0.9rem;
            }

            .logo-section {
                flex-direction: column;
                gap: 0.5rem;
            }
        }

        @media (max-width: 480px) {
            .card {
                padding: 1.5rem;
            }

            .overview-card .value {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <div class="logo-section">
                <div class="logo">ABC</div>
                <div>
                    <h1 class="header-title">ABC College of Engineering</h1>
                    <p style="color: var(--text-secondary);">Student Result Management System</p>
                </div>
            </div>
            <div class="user-profile">
                <div>
                    <strong>John Doe</strong><br>
                    <small>Roll No: CS2025001 | B.Tech CSE</small>
                </div>
            </div>
        </header>

        <div class="main-content">
            <!-- Search Section -->
            <section class="card search-section">
                <h2>📊 Fetch Your Results</h2>
                <form id="resultForm" class="form-grid">
                    <div class="form-group">
                        <label for="academicYear">Academic Year</label>
                        <select id="academicYear" required>
                            <option value="">Select Year</option>
                            <option value="2024-2025">2024-2025</option>
                            <option value="2023-2024">2023-2024</option>
                            <option value="2022-2023">2022-2023</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="semester">Semester</label>
                        <select id="semester" required>
                            <option value="">Select Semester</option>
                            <option value="1">Semester 1</option>
                            <option value="2">Semester 2</option>
                            <option value="3">Semester 3</option>
                            <option value="4">Semester 4</option>
                            <option value="5">Semester 5</option>
                            <option value="6">Semester 6</option>
                            <option value="7">Semester 7</option>
                            <option value="8">Semester 8</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="examType">Exam Type</label>
                        <select id="examType" required>
                            <option value="">Select Exam Type</option>
                            <option value="regular">Regular</option>
                            <option value="re-evaluation">Re-evaluation</option>
                            <option value="supplementary">Supplementary</option>
                        </select>
                    </div>
                    <div class="form-group" style="grid-column: span 3;">
                        <button type="submit" class="fetch-btn" id="fetchBtn">
                            <span class="spinner" id="spinner" style="display: none;"></span>
                            Fetch Results
                        </button>
                    </div>
                </form>
            </section>

            <!-- Results Section (Hidden by default) -->
            <section id="resultsSection" class="results-section card">
                <h2 style="color: var(--primary-color); margin-bottom: 2rem;">🎯 Semester Results</h2>
                
                <!-- Overview Cards -->
                <div class="overview-grid">
                    <div class="overview-card gpa">
                        <h3>SEMESTER GPA</h3>
                        <div class="value" id="gpaValue">8.76</div>
                    </div>
                    <div class="overview-card credits">
                        <h3>TOTAL CREDITS</h3>
                        <div class="value" id="creditsValue">24</div>
                    </div>
                    <div class="overview-card status">
                        <h3>PASSING STATUS</h3>
                        <div class="value" id="statusValue">Pass with Distinction</div>
                    </div>
                </div>

                <!-- Grades Table -->
                <div class="grades-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Credits</th>
                                <th>Grade</th>
                                <th>Grade Points</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody id="gradesTableBody">
                            <!-- Populated by JavaScript -->
                        </tbody>
                    </table>
                </div>
            </section>
        </div>

        <!-- Footer -->
        <footer class="footer">
            <div class="footer-links">
                <a href="#" onclick="window.print(); return false;">🖨️ Print Results</a>
                <a href="#">📝 Re-evaluation Form</a>
                <a href="#">📞 Contact COE</a>
            </div>
            <button class="print-btn" onclick="window.print();">📄 Download PDF / Print</button>
            <p class="copyright">&copy; 2025 ABC College of Engineering. All rights reserved.</p>
        </footer>
    </div>

    <script>
        // Mock result data
        const mockResults = {
            gpa: 8.76,
            totalCredits: 24,
            status: "Pass with Distinction",
            subjects: [
                {
                    code: "CS301",
                    name: "Data Structures & Algorithms",
                    credits: 4,
                    grade: "A",
                    gradePoints: 9.0,
                    status: "Pass"
                },
                {
                    code: "MA302",
                    name: "Discrete Mathematics",
                    credits: 4,
                    grade: "A-",
                    gradePoints: 8.5,
                    status: "Pass"
                },
                {
                    code: "CS303",
                    name: "Operating Systems",
                    credits: 4,
                    grade: "A",
                    gradePoints: 9.0,
                    status: "Pass"
                },
                {
                    code: "CS304",
                    name: "Database Management Systems",
                    credits: 4,
                    grade: "B+",
                    gradePoints: 8.0,
                    status: "Pass"
                },
                {
                    code: "EE305",
                    name: "Digital Electronics",
                    credits: 4,
                    grade: "A",
                    gradePoints: 9.0,
                    status: "Pass"
                }
            ]
        };

        // DOM Elements
        const resultForm = document.getElementById('resultForm');
        const fetchBtn = document.getElementById('fetchBtn');
        const spinner = document.getElementById('spinner');
        const resultsSection = document.getElementById('resultsSection');
        const gpaValue = document.getElementById('gpaValue');
        const creditsValue = document.getElementById('creditsValue');
        const statusValue = document.getElementById('statusValue');
        const gradesTableBody = document.getElementById('gradesTableBody');

        // Form submission handler
        resultForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            fetchBtn.classList.add('loading');
            fetchBtn.innerHTML = '<span class="spinner"></span>Fetching Results...';
            spinner.style.display = 'inline-block';
            
            // Simulate API delay
            setTimeout(() => {
                displayResults();
                fetchBtn.classList.remove('loading');
                fetchBtn.innerHTML = '✅ Results Loaded';
                spinner.style.display = 'none';
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    fetchBtn.innerHTML = 'Fetch Results';
                }, 2000);
            }, 1500);
        });

        // Display results
        function displayResults() {
            // Update overview cards
            gpaValue.textContent = mockResults.gpa;
            creditsValue.textContent = mockResults.totalCredits;
            statusValue.textContent = mockResults.status;
            
            // Populate table
            gradesTableBody.innerHTML = '';
            mockResults.subjects.forEach(subject => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><strong>${subject.code}</strong></td>
                    <td>${subject.name}</td>
                    <td><strong>${subject.credits}</strong></td>
                    <td><span style="color: var(--accent-color); font-weight: 600;">${subject.grade}</span></td>
                    <td><strong>${subject.gradePoints}</strong></td>
                    <td><span class="status ${subject.status.toLowerCase()}">${subject.status}</span></td>
                `;
                gradesTableBody.appendChild(row);
            });
            
            // Show results section
            resultsSection.classList.add('show');
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Print functionality (enhanced)
        function printResults() {
            window.print();
        }

        // Add smooth scrolling for footer links
        document.querySelectorAll('.footer-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (this.textContent.includes('Print')) {
                    printResults();
                }
            });
        });
    </script>
</body>
</html>