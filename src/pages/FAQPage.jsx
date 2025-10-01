import React from 'react';
import FAQ from '../components/FAQ';

const FAQPage = () => {
		return (
			<div className="max-w-4xl mx-auto px-6 py-12">
				<h1 className="text-3xl font-bold text-sky-300">All Frequently Asked Questions</h1>
				<p className="mt-3 text-sky-600 dark:text-white/80">Find detailed answers to common questions about reporting, privacy, and support.</p>

				<div className="mt-8">
					<FAQ compact={false} />
				</div>
			</div>
		);
	};

export default FAQPage;
