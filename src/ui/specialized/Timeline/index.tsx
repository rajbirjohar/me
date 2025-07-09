import type { LucideIcon } from "lucide-react";
import React from "react";
import { cn } from "@/utils/cn";
import styles from "./styles.module.css";

interface TimeLineItem extends React.HTMLAttributes<HTMLDivElement> {
	icon: LucideIcon;
}

export const TimeLineItem = React.forwardRef<HTMLDivElement, TimeLineItem>(
	({ className, children, icon, ...props }, ref) => {
		return (
			<div ref={ref} className={cn(styles.timelineitem, className)} {...props}>
				<div className={styles.timelineiconwrapper}>
					<div className={styles.timelineicon}>
						{React.createElement(icon, {
							className: styles.icon,
						})}
					</div>
				</div>
				{children}
			</div>
		);
	},
);

TimeLineItem.displayName = "TimeLineItem";

interface TimeLineHeader extends React.HTMLAttributes<HTMLDivElement> {}

export const TimeLineHeader = React.forwardRef<HTMLDivElement, TimeLineHeader>(
	({ className, children, ...props }, ref) => {
		return (
			<header
				ref={ref}
				className={cn(styles.timelineheader, className)}
				{...props}
			>
				{children}
			</header>
		);
	},
);

TimeLineHeader.displayName = "TimeLineHeader";

interface TimeLineTitle extends React.HTMLAttributes<HTMLHeadingElement> {}

export const TimeLineTitle = React.forwardRef<
	HTMLHeadingElement,
	TimeLineTitle
>(({ className, children, ...props }, ref) => {
	return (
		<h3 ref={ref} className={cn(styles.timelinetitle, className)} {...props}>
			{children}
		</h3>
	);
});

TimeLineTitle.displayName = "TimeLineTitle";

interface TimelineDate extends React.HTMLAttributes<HTMLTimeElement> {}

export const TimelineDate = React.forwardRef<HTMLTimeElement, TimelineDate>(
	({ className, children, ...props }, ref) => {
		return (
			<time ref={ref} className={cn(styles.timelinedate, className)} {...props}>
				{children}
			</time>
		);
	},
);

TimelineDate.displayName = "TimelineDate";

interface TimelineDescription extends React.HTMLAttributes<HTMLDivElement> {}

export const TimelineDescription = React.forwardRef<
	HTMLDivElement,
	TimelineDescription
>(({ className, children, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(styles.timelinedescription, className)}
			{...props}
		>
			{children}
		</div>
	);
});

TimelineDescription.displayName = "TimelineDescription";

interface TimeLineContent extends React.HTMLAttributes<HTMLDivElement> {}

export const TimeLineContent = React.forwardRef<
	HTMLDivElement,
	TimeLineContent
>(({ className, children, ...props }, ref) => {
	return (
		<div ref={ref} className={cn(styles.timelinecontent, className)} {...props}>
			{children}
		</div>
	);
});

TimeLineContent.displayName = "TimeLineContent";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn(styles.timeline, className)} {...props}>
				{children}
			</div>
		);
	},
);

Timeline.displayName = "Timeline";
