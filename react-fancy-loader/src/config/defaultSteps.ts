import {
  Binary,
  Database,
  Cpu,
  Network,
  Wifi,
  BarChart,
  Brain,
  GitBranch,
  TreePine
} from 'lucide-react';
import { Step } from '../types';

export const defaultStepsData: Step[] = [
  {
    text: "Initializing quantum processors...",
    Icon: Cpu,
    color: "text-blue-500"
  },
  {
    text: "Connecting to neural networks...",
    Icon: Network,
    color: "text-purple-500"
  },
  {
    text: "Training decision trees...",
    Icon: TreePine,
    color: "text-green-500"
  },
  {
    text: "Processing binary matrices...",
    Icon: Binary,
    color: "text-red-500"
  },
  {
    text: "Analyzing big data clusters...",
    Icon: Database,
    color: "text-yellow-500"
  },
  {
    text: "Optimizing network pathways...",
    Icon: Wifi,
    color: "text-indigo-500"
  },
  {
    text: "Generating predictive models...",
    Icon: BarChart,
    color: "text-pink-500"
  },
  {
    text: "Synthesizing AI algorithms...",
    Icon: Brain,
    color: "text-cyan-500"
  },
  {
    text: "Finalizing computation graphs...",
    Icon: GitBranch,
    color: "text-orange-500"
  }
];
